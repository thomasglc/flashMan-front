import type { BlocksContent } from "vue-strapi-blocks-renderer";

export function extractTextFromDescription(description: BlocksContent) {
    return description.map(item => {
        if (item.type === 'list') {
            return item.children.map(listItem => extractTextFromChildren(listItem.children)).join(' ');
        }
        if (item.children) {
            return extractTextFromChildren(item.children);
        }
        return '';
    }).join(' ');
}

const extractTextFromChildren = (children: any[]) => {
    return children.map(child => {
        if ('text' in child) {
            return child.text;
        }
        return '';
    }).join(' ');
}