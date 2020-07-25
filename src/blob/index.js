import {registerBlockType} from "@wordpress/blocks";
import {__} from "@wordpress/i18n";
import {SaveBlock,  EditBlock} from './blob-save-edit';

//import {RichText} from "@wordpress/editor";
// import {RichText, BlockControls,  InspectorControls, PanelColorSettings} from '@wordpress/block-editor'
// import { PanelBody } from "@wordpress/components";
// import { InnerBlocks} from "@word dpress/editor";
// import {ShapeEdit, ShapeSave}  from "./shap-edit";
//import './text-control';

registerBlockType('askteammate/blob', {
    title: __('Blob', 'askteammate-shapeart'),
    description: __('Generate a Blob', 'askteammate-shapeart'),
    category: 'ShapeArt',

   attributes: {
       gradient: { type: 'boolean', default: true},
        backgroundColor: { type: 'string', default: 'blue', selector: 'path', attribute: 'fill'},
        gradientColor1 : { type: 'string', default: 'blue'},
        gradientColor2: { type: 'string', defalt: 'acqua'},
        height: { type: 'integer', default: 300, selector: 'svg' , attribute: "height"},
        width: { type: 'integer', default: 300, selector: 'svg', attribute: 'width'},
        childPositionX: { type: 'integer', default: 25 },
        childPositionY: { type: 'integer', default: 50  },
        isImage: { type: 'boolean', default: true},
        content: { type: 'string', default: 'I am Joe!' },
        textColor: { type: 'string' },
        fontSize: { type: 'integer', default: 12 },
        refresh: { type: 'boolean'},
      //  fillOpacity: { type: 'number', default: 20,  selector: 'path', attribute: 'fill-opacity'},
        fillOpacity: { type: 'number', default: 20},
        shadow: { type: 'boolean', default: true},
        clientId: { type: 'string', default: ""},

        points: { type: 'array', default: []},
        numberOfPoints: { type : 'integer', default: 5},
        clipbottom: { type: 'boolean', default: true}
   },
  
    edit: EditBlock,
   
    save:  SaveBlock,

    // example: {
    //     attributes: {
    //         backgroundColor: "#2E46A2",
    //     childPositionX: 30,
    //     childPositionY: 73,
    //     textColor: 'white',
    //     shapeType: 'Number Tag',
    //     content: "4",
    //     fontSize: 74,
    //     width: 100,
    //     height: 100,
    //         title: __( 'Customizable Graphic Images', 'askteammate-shapeart' ),
    //     },
    // },

    // keywords: [__('Shape', 'askteammate-shapeart'), __('Circle', 'askteammate-shapeart'), __('Triangle', 'askteammate-shapeart')],

    //icon: <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  xs="0" y="0" width="24" height="24" viewBox="0, 0, 24, 24"> <defs> <clipPath id="Clip_1"> <path d="M-46,-133.499 L63,-133.499 L63,169.5 L-46,169.5 z M8.5,-123.5 L10.979,-123.412 C20.448,-122.188 31.336,-117.799 32.496,-106.982 C32.455,-106.337 32.472,-106.657 32.444,-106.024 C32.439,-105.889 32.435,-105.627 32.433,-105.604 C32.432,-105.564 32.443,-105.608 32.295,-105.099 L31.922,-103.82 L32.5,-103.82 L32.5,97.091 L33.084,97.358 C46.65,103.566 54.59,114.081 55,125.912 C55,144.366 34.237,159.5 8.5,159.5 C-17.237,159.5 -38,144.366 -38,125.877 C-37.915,114.208 -30.133,104.276 -16.058,97.346 L-15.5,97.071 L-15.5,-103.82 L-14.922,-103.82 L-15.295,-105.099 C-15.443,-105.608 -15.432,-105.564 -15.434,-105.604 C-15.435,-105.627 -15.44,-105.889 -15.444,-106.024 C-15.453,-106.307 -15.471,-106.643 -15.503,-107.078 C-15.5,-116.024 -4.815,-123.5 8.5,-123.5 z M8.535,-125.499 C-5.799,-125.5 -17.5,-117.312 -17.5,-107.006 C-17.468,-106.524 -17.451,-106.215 -17.443,-105.959 L-17.44,-105.82 L-17.5,-105.82 L-17.5,95.842 C-29.251,101.96 -39.789,111.726 -40,125.87 C-40,145.632 -18.23,161.5 8.5,161.5 C35.23,161.5 57,145.632 57,125.877 C55.975,112.108 46.854,101.455 34.5,95.826 L34.5,-105.82 L34.439,-105.82 L34.443,-105.959 C34.451,-106.215 34.468,-106.524 34.497,-106.934 L34.497,-107.078 C33.787,-116.914 24.443,-124.071 11.156,-125.405 L11.091,-125.409 L8.535,-125.499 z"/> </clipPath> <filter id="Shadow_2"> <feGaussianBlur in="SourceAlpha" stdDeviation="2.5"/> <feOffset dx="0" dy="2" result="offsetblur"/> <feFlood flood-color="#000000"/> <feComposite in2="offsetblur" operator="in"/> </filter> <clipPath id="Clip_3"> <path d="M-30.841,-119.705 L46.841,-119.705 L46.841,154.704 L-30.841,154.704 z M8,-111.705 C1.177,-111.443 -5.018,-108.157 -6.283,-102.854 L-6.661,-102.854 L-6.661,98.047 C-17.755,102.76 -24.863,111.253 -24.841,121.02 C-24.841,135.205 -10.138,146.704 8,146.704 C26.138,146.704 40.841,135.205 40.841,121.02 C40.53,111.405 34.068,102.566 22.661,98.047 L22.661,-102.854 L22.283,-102.854 C20.892,-108.021 15.385,-111.161 8.458,-111.614 L8,-111.704 z"/> </clipPath> <filter id="Shadow_4"> <feGaussianBlur in="SourceAlpha" stdDeviation="2.5"/> <feOffset dx="0" dy="2" result="offsetblur"/> <feFlood flood-color="#000000"/> <feComposite in2="offsetblur" operator="in"/> </filter> </defs> <g id="Layer_1"> <g display="none"> <path d="M8.535,-125.499 L11.091,-125.409 L11.156,-125.405 C24.443,-124.071 33.787,-116.914 34.497,-107.078 L34.497,-106.934 C34.468,-106.524 34.451,-106.215 34.443,-105.959 L34.439,-105.82 L34.5,-105.82 L34.5,95.826 C46.854,101.455 55.975,112.108 57,125.877 C57,145.632 35.23,161.5 8.5,161.5 C-18.23,161.5 -40,145.632 -40,125.87 C-39.789,111.726 -29.251,101.96 -17.5,95.842 L-17.5,-105.82 L-17.44,-105.82 L-17.443,-105.959 C-17.451,-106.215 -17.468,-106.524 -17.5,-107.006 C-17.5,-117.312 -5.799,-125.5 8.535,-125.499 z M8.5,-123.5 C-4.815,-123.5 -15.5,-116.024 -15.503,-107.078 C-15.471,-106.643 -15.453,-106.307 -15.444,-106.024 C-15.44,-105.889 -15.435,-105.627 -15.434,-105.604 C-15.432,-105.564 -15.443,-105.608 -15.295,-105.099 L-14.922,-103.82 L-15.5,-103.82 L-15.5,97.071 L-16.058,97.346 C-30.133,104.276 -37.915,114.208 -38,125.877 C-38,144.366 -17.237,159.5 8.5,159.5 C34.237,159.5 55,144.366 55,125.912 C54.59,114.081 46.65,103.566 33.084,97.358 L32.5,97.091 L32.5,-103.82 L31.922,-103.82 L32.295,-105.099 C32.443,-105.608 32.432,-105.564 32.433,-105.604 C32.435,-105.627 32.439,-105.889 32.444,-106.024 C32.472,-106.657 32.455,-106.337 32.496,-106.982 C31.336,-117.799 20.448,-122.188 10.979,-123.412 L8.5,-123.5 z" clip-path="url(#Clip_1)" filter="url(#Shadow_2)" fill="rgba(0,0,0,0.75)"/> <path d="M11.056,-124.41 C23.746,-123.136 32.822,-116.399 33.5,-107.006 C33.361,-105.082 33.541,-105.802 33.255,-104.82 L33.5,-104.82 L33.5,96.449 C47.607,102.904 55.582,113.838 56,125.877 C56,144.999 34.734,160.5 8.5,160.5 C-17.734,160.5 -39,144.999 -39,125.877 C-38.91,113.416 -30.431,103.308 -16.5,96.449 L-16.5,-104.82 L-16.255,-104.82 C-16.541,-105.802 -16.361,-105.082 -16.5,-107.006 C-16.5,-116.668 -5.307,-124.5 8.5,-124.5 L11.056,-124.41 z" fill-opacity="0" stroke="#6C6E70" stroke-width="2"/> </g> <g display="none"> <path d="M8,-111.704 L8.458,-111.614 C15.385,-111.161 20.892,-108.021 22.283,-102.854 L22.661,-102.854 L22.661,98.047 C34.068,102.566 40.53,111.405 40.841,121.02 C40.841,135.205 26.138,146.704 8,146.704 C-10.138,146.704 -24.841,135.205 -24.841,121.02 C-24.863,111.253 -17.755,102.76 -6.661,98.047 L-6.661,-102.854 L-6.283,-102.854 C-5.018,-108.157 1.177,-111.443 8,-111.705 z" clip-path="url(#Clip_3)" filter="url(#Shadow_4)" fill="rgba(0,0,0,0.75)"/> <path d="M8.458,-111.614 C15.385,-111.161 20.892,-108.021 22.283,-102.854 L22.661,-102.854 L22.661,98.047 C34.068,102.566 40.53,111.405 40.841,121.02 C40.841,135.205 26.138,146.704 8,146.704 C-10.138,146.704 -24.841,135.205 -24.841,121.02 C-24.863,111.253 -17.755,102.76 -6.661,98.047 L-6.661,-102.854 L-6.283,-102.854 C-5.018,-108.157 1.177,-111.443 8,-111.705 z" fill="#3A3333"/> </g> <path d="M12.5,23.53 C6.425,23.53 1.5,18.592 1.5,12.5 C1.5,6.408 6.425,1.47 12.5,1.47 C18.575,1.47 23.5,6.408 23.5,12.5 C23.5,18.592 18.575,23.53 12.5,23.53 z" fill-opacity="0" stroke="#000000" stroke-width="1"/> <text transform="matrix(1, -0.009, 0.009, 1, 12, 13.052)"> <tspan x="-9" y="4" font-family="TimesNewRomanPS-ItalicMT" font-size="18" fill="#000000">Tx</tspan> </text> </g> </svg>
   icon:  <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  x="0" y="0" width="24" height="24" viewBox="0, 0, 24, 24">  <g>  <path d="M12.752,22.278 C5,24.4 -0.485,21.64 2.558,13.52 C5.6,5.4 8.478,2.067 12.339,3.233 C16.2,4.4 26.112,8.395 21.156,12.597 C16.2,16.8 19.2,18.8 12.752,22.278 z" fill="#21B3AC"/></g></svg>
   
}

    );



    