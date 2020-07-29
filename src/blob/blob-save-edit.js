import { createBlob, EditBlob, SaveBlob } from './blob';

import { BlockControls, InspectorControls, ColorPalette } from '@wordpress/block-editor'
import { PanelBody, RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { TextControl, TextareaControl, ToggleControl } from '@wordpress/components';

import { MediaReplaceFlow } from '@wordpress/block-editor';

import { ColorPaletteControl } from '@wordpress/block-editor';

export function SaveBlock(props) {

    return <EditBlob props={props} />

    
}


export function EditBlock(props) {

    const { width, height,  childPositionX, childPositionY, 
        fillOpacity,  gradientColor1, gradientColor2,  
        headshot, clientId, zoom } = props.attributes;
    let { points } = props.attributes;
    const { setAttributes } = props;
    const { id, url, atl } = props.attributes;

    
    console.log(' Refresh ', props);

    if (clientId.length <= 0) {
        setAttributes({ clientId: props.clientId });
    }

    function onSelectImage({ id, url, atl }) {
        console.log('image ', id, url);
        setAttributes({ id, url, atl });
    }

    function onSelectURL(url) {

        console.log('image ', url);
        setAttributes({ url });

    }
    function onUploadError(error) {
        console.log('error');
    }
    return (<>

        <BlockControls>

            <MediaReplaceFlow
                mediaId={id}
                mediaURL={url}
                allowedTypes={['image']}
                accept="image/*"
                onSelect={onSelectImage}
                onSelectURL={onSelectURL}
                onError={onUploadError}
            />
        </BlockControls>
        <BlockControls
            controls={
                [
                    {
                        icon: 'update',
                        title: __('Refresh', 'ShapeArt'),
                        onClick: () => {

                            const newPoints = createBlob(props);
                            console.log( ' new point ', newPoints);
                            setAttributes({ points:   newPoints });
                            //setAttributes({ points: [] });
                        }
                    }

                ]
            }
        />
        <InspectorControls>


            <PanelBody title={__('Dimentions', 'askteammate-shapeart')}>
                <TextControl
                    label="Width"
                    value={width}
                    onChange={(width) => { setAttributes({ width: parseInt(width) }) }}
                />

                <TextControl
                    label="Height"
                    value={height}
                    onChange={(height) => { setAttributes({ height: parseInt( height) }) }}
                />

            </PanelBody>

            <PanelBody title={__('Blob Color', 'askteammate-shapeart')}>



                <RangeControl
                    label="Background Color Opacity"
                    value={fillOpacity}
                    onChange={(fillOpacity) => { setAttributes({ fillOpacity }) }}
                    min={0}
                    max={100}
                />

                <ColorPaletteControl
                    value={gradientColor1}
                    label="Color 1:"
                    onChange={(gradientColor1) => { setAttributes({ gradientColor1 }) }}
                />
                <ColorPaletteControl
                    value={gradientColor2}
                    label="Color 2:"
                    onChange={(gradientColor2) => { setAttributes({ gradientColor2 }) }}
                />





            </PanelBody>
            <PanelBody title={__('Overlay', 'askteammate-shapeart')}>



                <ToggleControl
                    checked={headshot}
                    label="Head Shot (Bottom crop only)"
                    onChange={() => { setAttributes({ headshot: !headshot }) }}
                />

                <RangeControl
                    label="Zoom Image"
                    value={zoom}
                    onChange={(zoom) => { setAttributes({ zoom }) }}
                    min={0}
                    max={500}
                />


                <TextControl
                    label="Inner Element X"
                    value={childPositionX}
                    onChange={(childPositionX) => { setAttributes(  {childPositionX: parseInt(childPositionX) }) }}

                />

                <TextControl
                    label="Inner Element Y"
                    value={childPositionY}
                    onChange={(childPositionY) => {  setAttributes({ childPositionY: parseInt(childPositionY) }) }}
                />

            </PanelBody>



        </InspectorControls>

        <EditBlob props={props} />





    </>
    )

}




