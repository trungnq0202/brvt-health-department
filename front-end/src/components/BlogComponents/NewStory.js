import React, { Component } from 'react';
import { stateToMarkdown } from "draft-js-export-markdown";

import {Editor, EditorState, RichUtils, getDefaultKeyBinding} from 'draft-js';

import BlockStyleControls from './RichText/BlockStyleControls';
import InlineStyleControls from './RichText/InlineStyleControls';

import './RichText.css';

export default class NewStory extends Component {
  constructor(props) {
      super(props);
      this.state = {
        editorState: EditorState.createEmpty(),
        title: '',
        content: '',
        done: 'no'
      };

      this.focus = () => this.refs.editor.focus();
      this.onChange = this.onChange.bind(this);
      this.handleKeyCommand = this._handleKeyCommand.bind(this);
      this.mapKeyToEditorCommand = this._mapKeyToEditorCommand.bind(this);
      this.toggleBlockType = this._toggleBlockType.bind(this);
      this.toggleInlineStyle = this._toggleInlineStyle.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(editorState) {
      this.setState({editorState});
      const contentState = this.state.editorState.getCurrentContent();
      const html = stateToMarkdown(contentState);
      this.state.title && this.state.content ? this.setState({done: 'done'}) : console.log('hi');
      this.setState({content: html});
    }

    _handleKeyCommand(command, editorState) {
      const newState = RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        this.onChange(newState);
        return true;
      }
      return false;
    }

    _mapKeyToEditorCommand(e) {
      if (e.keyCode === 9 /* TAB */) {
        const newEditorState = RichUtils.onTab(
          e,
          this.state.editorState,
          4, /* maxDepth */
        );
        if (newEditorState !== this.state.editorState) {
          this.onChange(newEditorState);
        }
        return;
      }
      return getDefaultKeyBinding(e);
    }

    _toggleBlockType(blockType) {
      this.onChange(
        RichUtils.toggleBlockType(
          this.state.editorState,
          blockType
        )
      );
    }

    _toggleInlineStyle(inlineStyle) {
      this.onChange(
        RichUtils.toggleInlineStyle(
          this.state.editorState,
          inlineStyle
        )
      );
    }

    handleSubmit() {
      const { title, content } = this.state;
      if(title && content) {
        let newStory = { title, content, bookmark: false};
        this.props.handleSubmission(newStory);
        this.setState({editorState: EditorState.createEmpty(), title: '', content: '', done: 'submitted'});
      }
    }

    render() {
      const { editorState } = this.state;
      let className = 'RichEditor-editor';
      var contentState = editorState.getCurrentContent();
      if (!contentState.hasText()) {
        if (contentState.getBlockMap().first().getType() !== 'unstyled') {
          className += ' RichEditor-hidePlaceholder';
        }
      }

      const { title, done } = this.state;

      return (
        <div className="richtext-editor" style={{ margin: "10vh"}}>
          <input type="text" className="input-title" value={title} onChange={(e) => this.setState({title: e.target.value})} placeholder="Title" />
          <BlockStyleControls
            editorState={editorState}
            onToggle={this.toggleBlockType}
          />
          <InlineStyleControls
            editorState={editorState}
            onToggle={this.toggleInlineStyle}
          />
          <div className={className} onClick={this.focus}>
            <Editor
              blockStyleFn={getBlockStyle}
              editorState={editorState}
              handleKeyCommand={this.handleKeyCommand}
              keyBindingFn={this.mapKeyToEditorCommand}
              onChange={this.onChange}
              placeholder="Tell your story..."
              ref="editor"
              spellCheck={true}
            />
          </div>
          {done ==='done' ? <button onClick={this.handleSubmit} className="btn btn-submit">Submit</button> : (done==='submitted' ? <span className="msg-success">Your story has been submitted</span> : <span className="msg-error">You havent finished writing your story</span>)}
        </div>
      );

      function getBlockStyle(block) {
        switch (block.getType()) {
          case 'blockquote': return 'RichEditor-blockquote';
          default: return null;
        }
      }
    }
}
