import { parse } from "./libregex";
import { breakLine } from '../../helper/until'
import {defaultHashtagRenderer} from './DefaultHashTag'

let createElement: any;
let canRenderArray = false;

try {
  createElement = require("react").createElement;
  canRenderArray = true;
} catch (err) {
  try {
    canRenderArray = false;
  } catch (err) {
    console.log(err);
  }
}


// eslint-disable-next-line import/no-anonymous-default-export
export default (props: any) => {
  console.log(props.renderHashtag)
  const contents =
    typeof props.children === "object" && props.children.length
      ? !isNaN(props.children.length)
        ? props.children[0]
        : breakLine(props.children)
      : breakLine(props.children);
  const hashtagRenderer = props.renderHashtag || defaultHashtagRenderer;
  const mentionRenderer = props.renderMention || defaultHashtagRenderer;
  const pointRenderer = props.renderPoint || defaultHashtagRenderer;
  const onHashtagClick = props.onHashtagClick;
  const parsed = parse(contents, hashtagRenderer, mentionRenderer, pointRenderer, onHashtagClick);

  return canRenderArray ? parsed : createElement("span", null, parsed);
};
