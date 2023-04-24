/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
    apiVersion: 2,
    title: 'Improve my writing',
    icon: 'block-editor-block-icon',
    category: 'design',
	className: 'wp-block-create-block-improve-my-writing',
    attributes: {
        content: {
            type: 'string',
            source: 'html',
            selector: 'p',
        },
		alignment: {
            type: 'string',
            default: 'none',
        },
    },
    example: {
        attributes: {
            content: 'Hello World',
        },
    },
    edit: Edit,
    save: ( props ) => {
        const blockProps = useBlockProps.save();
        return (
            <RichText.Content
                { ...blockProps }
                tagName="p"
                value={ props.attributes.content }
            />
        );
    },
} );