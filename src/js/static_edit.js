
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, MediaUpload, PlainText } = wp.editor;
const { Button } = wp.components;

import '../scss/static_edit.scss';
import '../scss/static_block.scss';


registerBlockType (
  'poeticagency/static', 
  {
    title: __('POETIC AGENCY STATIC'),
    icon: 'id-alt',
    category: 'poeticagency',
    attributes: {
      title: {
        source: 'text',
        selector: '.card__title'
      },
      body: {
        type: 'array',
        source: 'children',
        selector: '.card__body'
      },
      mediaId: {
        type: 'number'
      },
      imageAlt: {
        attribute: 'alt',
        selector: '.card__image'
      },
      imageUrl: {
        attribute: 'src',
        selector: '.card__image'
      }
    },
    edit({ 
      className,
      attributes,
      setAttributes
    }) {

      const getImageButton = (openEvent) => {

        if(attributes.imageUrl) {

          return ( 
            <img 
              src={ attributes.imageUrl }
              onClick={ openEvent }
              className="image"
            />
          );
          
        } else {

          return ( 
            <div className={ className }>
              <Button 
                onClick={ openEvent }
                className="button button-large"
              >
                Pick an image
              </Button>
            </div>
          );
        }
      };

      return (
        <div className="container">
          <MediaUpload
            onSelect={ media => { 
              setAttributes({ 
                imageAlt: media.alt, 
                imageUrl: media.url ,
                mediaId: media.id
              });
            }}
            type="image"
            value={ attributes.imageID }
            render={ ({ open }) => getImageButton(open) }
          />
          <PlainText
            onChange={ content => setAttributes({ title: content }) }
            value={ attributes.title }
            placeholder="Your card title"
            className="heading"
          />
          <RichText
            onChange={ content => setAttributes({ body: content }) }
            value={ attributes.body }
            multiline="p"
            placeholder="Your card text"
          />
        </div>
      );
    },
    save({ attributes }) {

      const cardImage = (src, alt) => {

        if(!src) return null;

        return (
          <img 
            className={ `card__image wp-image-${ attributes.mediaId }` }
            src={ src }
            alt={ alt }
          /> 
        );
      };
      
      return (
        <div className="card">
          { cardImage(attributes.imageUrl, attributes.imageAlt) }
          <div className="card__content">
            <h3 className="card__title">{ attributes.title }</h3>
            <div className="card__body">
              { attributes.body }
            </div>
          </div>
        </div>
      );
    }
  }
);