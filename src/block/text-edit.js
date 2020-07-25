import {RichText, BlockControls,  InspectorControls, PanelColorSettings} from '@wordpress/block-editor'
import { PanelBody } from "@wordpress/components";
import {__} from "@wordpress/i18n";
import {  TextControl } from '@wordpress/components';
const { useDispatch, useSelect } = wp.data
import { Text, Tspan } from '@wordpress/components';

export default function TextEdit(props) { 
        const {className, attributes, setAttributes, context, clientId, backgroundColor, isSelected} = props;


        const {content, textColor,  childPositionX, childPositionY} = attributes;

        const {updateBlockAttributes } = useDispatch('core/block-editor');

        //const { editPost } = useDispatch('core/editor')
        // const {title} = useSelect((select) => {
        //     return {
        //         title: select('core/editor').getEditedPostAttribute( 'title')
        //     };
        // }, []);
        // <p>{title} }</p>
        //     <input
        //         type="text"
        //         value={wp.data.select('core/editor').getEditedPostAttribute( 'title')}
        //         onChange = { (v) => 
        //             {    

        //                                     editPost( { 'title': v.target.value} );
        //             }
                
        //         }
            
        // const onChangeContent = (content) => {
        //     setAttributes({content}) // RichText
        // }

        // Used for Input
        const onChangeContent = (event) => { setAttributes({ content: event.target.value }) }

       


        const onChangeTextColor =  (textColor) => {  setAttributes({textColor})};
        return (
            <>
            <InspectorControls> 
                 <PanelBody title={ __('Shape', 'askteammate-shapeart')}>
                </PanelBody>
            
                <PanelColorSettings 
                    title={ __("Text Colors",'askteammate-shapeart' )}

                    colorSettings= {[
                        {
                            value: textColor,
                            label: __("Text Colors",'askteammate-shapeart' ),
                            onChange: onChangeTextColor,

                        }

                    ]}/>

                <PanelBody title={ __('Dimentions', 'askteammate-shapeart')}>

                <TextControl
                        label="Text Position X"
                        value={childPositionX}
                        onChange={(childPositionX) => { 
                            
                            const block = wp.data.select('core/block-editor').getBlockParentsByBlockName(clientId, 'askteammate/shapeart');
                            updateBlockAttributes( block, {childPositionX: childPositionX});
                            
                            
                            setAttributes({ childPositionX: childPositionX })
                     }}
                    />

                    <TextControl
                        label="Text Position Y"
                        value={childPositionY}
                        onChange={(childPositionY) => {  setAttributes({ childPositionY: childPositionY }) }}
                    />
                </PanelBody>

            </InspectorControls>
            
            
            { isSelected ? (
                            

            <textarea id="input"  type="text" value={content} onChange={onChangeContent}/>
           )
            :
            (<text> {content}</text>)
        }
            
                        {/* { <RichText
                tagName="p" // The tag here is the element output and editable in the admin
                className={ className }
                value={ content } 
                formattingControls={ [ 'bold', 'italic',  'link',  'text-color' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
                onChange={onChangeContent} // Store updated content as a block attribute
                placeholder={ __( 'Tag Line' ) } // Display this text before any content has been added by the user
                style= { {backgroundColor: backgroundColor}}
            /> } */}

        </>
    );   }