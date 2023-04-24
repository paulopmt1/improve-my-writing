import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import axios from 'axios';

import { 
	useBlockProps, 
	RichText, 
	BlockControls, 
	AlignmentToolbar, 
} from '@wordpress/block-editor';

import { ToolbarGroup, ToolbarButton, DropdownMenu, Icon } from '@wordpress/components';
import './editor.scss';

const CHAT_GPT_KEY = 'YOUR_CHAT_GPT_KEY';

export default function Edit({ attributes, setAttributes }) {

	const textTools = [
		{ title: 'Fix wrong words', value:'Fix wrong words: ', onClick: function() { setTextTool(this.value) }},
		{ title: 'Write it better', value:'Write it better: ', onClick: function() { setTextTool(this.value) }},
	];

	const deafultTextTool = textTools[0];
	const [blockText, setBlockText] = useState(attributes.content);
	const [textTool, setTextTool] = useState(deafultTextTool.value);

	const onChangeContent = ( newContent ) => {
		console.log('newContent: ', newContent)
		setBlockText(newContent)
		setAttributes( { content: newContent } );
		console.log('attributes.content: ', attributes.content)
	};

	const handleButtonClick = () => {
		axios.post(' https://api.openai.com/v1/chat/completions', {
			model: "gpt-3.5-turbo",
			messages: [{ role: 'user', content: textTool + blockText }],
		}, {
			headers: {
			'Authorization': `Bearer ${CHAT_GPT_KEY}`,
			'Content-Type': 'application/json'
			}
		})
		.then(response => {
			const suggestion = response.data.choices[0].message.content;
			setBlockText(suggestion);
		})
		.catch(error => {
			console.error(error);
		});
	  };

	const onChangeAlignment = ( newAlignment ) => {
		console.log('newAlignment ', newAlignment)
		setAttributes( {
			alignment: newAlignment === undefined ? 'none' : newAlignment,
		} );
	};

	const MyDropdownMenu = () => (
		<DropdownMenu
			icon={ <Icon icon="welcome-write-blog" /> }
			label="Select a tool to improve your text"
			controls={ textTools }
		/>
	);

	return (
		<div { ...useBlockProps() }>
			{
				<BlockControls>
					<ToolbarGroup>
						<MyDropdownMenu/>
						<ToolbarButton
							icon="controls-play"
							label="Click me to improve your writing"
							onClick={handleButtonClick}
						/>
						<AlignmentToolbar
							value={ attributes.alignment }
							onChange={ onChangeAlignment }
						/>
					</ToolbarGroup>
				</BlockControls>
			}
			<RichText
				className={ attributes.className }
				style={ { textAlign: attributes.alignment } }
				tagName="p"
				onChange={ onChangeContent }
				value={ blockText }
			/>

		</div>
	);
}
