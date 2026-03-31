import { config, fields, collection } from "@keystatic/core";

export default config({
    storage: {
        kind: "local",
    },
    collections: {
        notes: collection({
            label: "Notes",
            path: "src/content/notes/*",
            slugField: "title",
            format: { contentField: "content" },
            schema: {
                title: fields.slug({
                    name: { label: "Title" },
                }),
                date: fields.date({ label: "Date" }),
                tags: fields.array(fields.text({ label: "Tag" }), {
                    label: "Tags",
                    itemLabel: (props) => props.value || "Tag",
                }),
                draft: fields.checkbox({ label: "Draft" }),
                content: fields.mdx({ label: "Content" }),
            },
        }),
    },
});
