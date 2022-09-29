export default{
    name: "artikel",
    type:"document",
    title: "Artikel",
    fields:[
        {
            name:"title",
            title:"Title Artikel",
            type:"string"
        },
        {
            name:"image",
            title:"Image",
            type:"image",
            options:{
                hotspot: true,
            }
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
              source: "title",
              maxLength: 96,
            },
          },
        {
            name:"text",
            title:"Text",
            type:"array",
            of:[
                {
                    title: "Block",
                    type: "block",
                    styles: [{ title: "Normal", value: "normal" }],
                    lists: [],
                },
            ]
        },
        {
            name: "category",
            title: "Category",
            type: "reference",
            to: { type: "category" },
        },
        {
            name:"datepost",
            title:"DatePost",
            type:"datetime",
        },
    ]
}