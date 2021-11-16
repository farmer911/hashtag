import React from "react";

export function urlify(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  return text.replace(urlRegex, function(url) {
    return '<a href="' + url + '" target="_blank">' + url + '</a>';
  })
}

const ruleHastag = /([@|#|+][^\s]+)|(:[^:\s]*(?:::[^:\s]*)*:)/g;

const ruleMention = /(^|\s)@([A-z,0-9]+)\b/gi;

const rulePoint = /(\+[0-9]+\b)/g;

export const parse = (value: string, renderer: any, metionrender: any, pointrender: any, action: any) => {
  return value ? value.split(ruleHastag).filter((chunk: string) => chunk !== undefined).map((chunk: string, index: number) => {
    if (chunk.match(ruleHastag)) {
      return renderer(chunk, action, index);
    }
    if (chunk.match(ruleMention)) {
      return metionrender(chunk, action, index);
    }
    if (chunk.match(rulePoint)) {
      return pointrender(chunk, action, index);
    }

    // eslint-disable-next-line react/jsx-key
    return  React.createElement('span', { 
      dangerouslySetInnerHTML: {
      __html: urlify(chunk),
      },
      key: index
  },);
  }) : "";
}
