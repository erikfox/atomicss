'use strict';

/*
  https://developer.mozilla.org/en-US/docs/Web/CSS/display
*/

var display = {
  inherit: { display: 'inherit' },
  initial: { display: 'initial' },
  unset: { display: 'unset' },
  block: { display: 'block' },
  inline: { display: 'inline' },
  runIn: { display: 'run-in' },
  flow: { display: 'flow' },
  flowRoot: { display: 'flow-root' },
  table: { display: 'table' },
  flex: { display: 'flex' },
  grid: { display: 'grid' },
  ruby: { display: 'ruby' },
  subgrid: { display: 'subgrid' },
  blockFlow: { display: 'block flow' },
  blockFlowRoot: { display: 'block flow-root' },
  blockTable: { display: 'block table' },
  blockFlex: { display: 'block flex' },
  blockGrid: { display: 'block grid' },
  blockRuby: { display: 'block ruby' },
  blockSubgrid: { display: 'block subgrid' },
  inlineFlow: { display: 'inline flow' },
  inlineFlowRoot: { display: 'inline flow-root' },
  inlineTable: { display: 'inline-table' },
  inlineFlex: { display: 'inline-flex' },
  inlineGrid: { display: 'inline-grid' },
  inlineRuby: { display: 'inline ruby' },
  inlineSubgrid: { display: 'inline subgrid' },
  runInFlow: { display: 'run-in flow' },
  runInFlowRoot: { display: 'run-in flow-root' },
  runInTable: { display: 'run-in table' },
  runInFlex: { display: 'run-in flex' },
  runInGrid: { display: 'run-in grid' },
  runInRuby: { display: 'run-in ruby' },
  runInSubgrid: { display: 'run-in subgrid' },
  listItemBlockFlow: { display: 'list-item block flow' },
  listItemBlockFlowRoot: { display: 'list-item block flow-root' },
  listItemBlockTable: { display: 'list-item block table' },
  listItemBlockFlex: { display: 'list-item block flex' },
  listItemBlockGrid: { display: 'list-item block grid' },
  listItemBlockRuby: { display: 'list-item block ruby' },
  listItemBlockSubgrid: { display: 'list-item block subgrid' },
  listItemInlineFlow: { display: 'list-item inline flow' },
  listItemInlineFlowRoot: { display: 'list-item inline flow-root' },
  listItemInlineTable: { display: 'list-item inline table' },
  listItemInlineFlex: { display: 'list-item inline flex' },
  listItemInlineGrid: { display: 'list-item inline grid' },
  listItemInlineRuby: { display: 'list-item inline ruby' },
  listItemInlineSubgrid: { display: 'list-item inline subgrid' },
  listItemRunInFlow: { display: 'list-item run-in flow' },
  listItemRunInFlowRoot: { display: 'list-item run-in flow-root' },
  listItemRunInTable: { display: 'list-item run-in table' },
  listItemRunInFlex: { display: 'list-item run-in flex' },
  listItemRunInGrid: { display: 'list-item run-in grid' },
  listItemRunInRuby: { display: 'list-item run-in ruby' },
  listItemRunInSubgrid: { display: 'list-item run-in subgrid' },
  listItem: { display: 'list-item' },
  tableRowGroup: { display: 'table-row-group' },
  tableHeaderGroup: { display: 'table-header-group' },
  tableFooterGroup: { display: 'table-footer-group' },
  tableRow: { display: 'table-row' },
  tableCell: { display: 'table-cell' },
  tableColumnGroup: { display: 'table-column-group' },
  tableColumn: { display: 'table-column' },
  tableCaption: { display: 'table-caption' },
  rubyBase: { display: 'ruby-base' },
  rubyText: { display: 'ruby-text' },
  rubyBaseContainer: { display: 'ruby-base-container' },
  rubyTextContainer: { display: 'ruby-text-container' },
  contents: { display: 'contents' },
  none: { display: 'none' },
  inlineBlock: { display: 'inline-block' },
};

/*
  https://developer.mozilla.org/en-US/docs/Web/CSS/height
*/

var height = {
  inherit: { display: 'inherit' },
  initial: { display: 'initial' },
  unset: { display: 'unset' },
  borderBox: { display: 'border-box' },
  contentBox: { display: 'content-box' },
  auto: { display: 'auto' },
  fill: { display: 'fill' },
  maxContent: { display: 'max-content' },
  minContent: { display: 'min-content' },
  available: { display: 'available' },
  fitContent: { display: 'fit-content' },
};

/*
  https://developer.mozilla.org/en-US/docs/Web/CSS/margin
*/

var margin = {
  auto: { margin: 'auto' },
  inherit: { margin: 'inherit' },
  initial: { margin: 'initial' },
  unset: { margin: 'unset' },
  smallest: { margin: '0.25em' },
  small: { margin: '0.5em' },
  medium: { margin: '1em' },
  large: { margin: '2em' },
  largest: { margin: '4em' },
  top: {
    auto: { 'margin-top': 'auto' },
    inherit: { 'margin-top': 'inherit' },
    initial: { 'margin-top': 'initial' },
    unset: { 'margin-top': 'unset' },
    smallest: { 'margin-top': '0.25em' },
    small: { 'margin-top': '0.5em' },
    medium: { 'margin-top': '1em' },
    large: { 'margin-top': '2em' },
    largest: { 'margin-top': '4em' },
  },
  bottom: {
    auto: { 'margin-bottom': 'auto' },
    inherit: { 'margin-bottom': 'inherit' },
    initial: { 'margin-bottom': 'initial' },
    unset: { 'margin-bottom': 'unset' },
    smallest: { 'margin-bottom': '0.25em' },
    small: { 'margin-bottom': '0.5em' },
    medium: { 'margin-bottom': '1em' },
    large: { 'margin-bottom': '2em' },
    largest: { 'margin-bottom': '4em' },
  },
  left: {
    auto: { 'margin-left': 'auto' },
    inherit: { 'margin-left': 'inherit' },
    initial: { 'margin-left': 'initial' },
    unset: { 'margin-left': 'unset' },
    smallest: { 'margin-left': '0.25em' },
    small: { 'margin-left': '0.5em' },
    medium: { 'margin-left': '1em' },
    large: { 'margin-left': '2em' },
    largest: { 'margin-left': '4em' },
  },
  right: {
    auto: { 'margin-right': 'auto' },
    inherit: { 'margin-right': 'inherit' },
    initial: { 'margin-right': 'initial' },
    unset: { 'margin-right': 'unset' },
    smallest: { 'margin-right': '0.25em' },
    small: { 'margin-right': '0.5em' },
    medium: { 'margin-right': '1em' },
    large: { 'margin-right': '2em' },
    largest: { 'margin-right': '4em' },
  },
};

/*
  https://developer.mozilla.org/en-US/docs/Web/CSS/padding
*/

var padding = {
  inherit: { padding: 'inherit' },
  initial: { padding: 'initial' },
  unset: { padding: 'unset' },
  smallest: { padding: '0.25em' },
  small: { padding: '0.5em' },
  medium: { padding: '1em' },
  large: { padding: '2em' },
  largest: { padding: '4em' },
  top: {
    inherit: { 'padding-top': 'inherit' },
    initial: { 'padding-top': 'initial' },
    unset: { 'padding-top': 'unset' },
    smallest: { 'padding-top': '0.25em' },
    small: { 'padding-top': '0.5em' },
    medium: { 'padding-top': '1em' },
    large: { 'padding-top': '2em' },
    largest: { 'padding-top': '4em' },
  },
  bottom: {
    inherit: { 'padding-bottom': 'inherit' },
    initial: { 'padding-bottom': 'initial' },
    unset: { 'padding-bottom': 'unset' },
    smallest: { 'padding-bottom': '0.25em' },
    small: { 'padding-bottom': '0.5em' },
    medium: { 'padding-bottom': '1em' },
    large: { 'padding-bottom': '2em' },
    largest: { 'padding-bottom': '4em' },
  },
  left: {
    inherit: { 'padding-left': 'inherit' },
    initial: { 'padding-left': 'initial' },
    unset: { 'padding-left': 'unset' },
    smallest: { 'padding-left': '0.25em' },
    small: { 'padding-left': '0.5em' },
    medium: { 'padding-left': '1em' },
    large: { 'padding-left': '2em' },
    largest: { 'padding-left': '4em' },
  },
  right: {
    inherit: { 'padding-right': 'inherit' },
    initial: { 'padding-right': 'initial' },
    unset: { 'padding-right': 'unset' },
    smallest: { 'padding-right': '0.25em' },
    small: { 'padding-right': '0.5em' },
    medium: { 'padding-right': '1em' },
    large: { 'padding-right': '2em' },
    largest: { 'padding-right': '4em' },
  },
};

class Atom {
  constructor() {
    this.display = display;
    this.height = height;
    this.margin = margin;
    this.padding = padding;
  }

  setup(options = {}) {
    this.options = options;
  }
}

const instance = new Atom();

module.exports = instance;
