import {
	AccessibilityHelp,
	Autoformat,
	AutoImage,
	Autosave,
	BalloonToolbar,
	BlockQuote,
	Bold,
	CKBox,
	CKBoxImageEdit,
	CloudServices,
	Essentials,
	Heading,
	ImageBlock,
	ImageCaption,
	ImageInline,
	ImageInsert,
	ImageInsertViaUrl,
	ImageResize,
	ImageStyle,
	ImageTextAlternative,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Italic,
	Link,
	LinkImage,
	List,
  AutoMediaEmbed,
	ListProperties,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	PictureEditing,
	SelectAll,
	Table,
	TableCaption,
	TableCellProperties,
	TableColumnResize,
	TableProperties,
	TableToolbar,
	TextTransformation,
	Underline,
	Undo,
} from 'ckeditor5';
import {
  AIAssistant,
  OpenAITextAdapter,
} from "ckeditor5-premium-features";
 const editorConfig:any = {
    toolbar: {
        items: [
            'undo',
            'redo',
            '|',
            'aiCommands',
            'aiAssistant',
            '|',
            'heading',
            '|',
            'bold',
            'italic',
            'underline',
            '|',
            'link',
            'insertImage',
            'mediaEmbed',
            'insertTable',
            'blockQuote',
            '|',
            'bulletedList',
            'numberedList',
            'outdent',
            'indent'
        ],
        shouldNotGroupWhenFull: false
    },
    plugins: [
        AccessibilityHelp,
        AIAssistant,
        Autoformat,
        AutoImage,
        Autosave,
        BalloonToolbar,
        BlockQuote,
        Bold,
        CKBox,
        CKBoxImageEdit,
        CloudServices,
        Essentials,
        Heading,
        ImageBlock,
        ImageCaption,
        ImageInline,
        ImageInsert,
        ImageInsertViaUrl,
        ImageResize,
        ImageStyle,
        ImageTextAlternative,
        ImageToolbar,
        ImageUpload,
        AutoMediaEmbed,
        Indent,
        IndentBlock,
        Italic,
        Link,
        LinkImage,
        List,
        ListProperties,
        MediaEmbed,
        OpenAITextAdapter,
        Paragraph,
        PasteFromOffice,
        PictureEditing,
        SelectAll,
        Table,
        TableCaption,
        TableCellProperties,
        TableColumnResize,
        TableProperties,
        TableToolbar,
        TextTransformation,
        Underline,
        Undo,
        
    ],
    language:"fa",
    balloonToolbar: ['aiAssistant', '|', 'bold', 'italic', '|', 'link', 'insertImage', '|', 'bulletedList', 'numberedList'],
  
    heading: {
        options: [
          { model: 'paragraph', title: 'Paragraph', class: 'text-base leading-relaxed text-gray-700' },
          { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'text-3xl font-font-DanaBold  leading-tight text-gray-900' },
          { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'text-2xl font-DanaMediumleading-snug text-gray-800' },
          { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'text-xl font-Dana leading-normal text-gray-700' }
        ]
      },
      image: {
        toolbar: [
          'imageTextAlternative', 'imageStyle:full', 'imageStyle:side'
        ],
        styles: [
          'full', 'side'
        ]
      },
    
    licenseKey: process.env.NEXT_PUBLIC_CKEDITOR,
    link: {
        addTargetToExternalLinks: true,
        defaultProtocol: 'https://',
        decorators: {
            toggleDownloadable: {
                mode: 'manual',
                label: 'Downloadable',
                attributes: {
                    download: 'file'
                }
            }
        }
    },
    list: {
        properties: {
            styles: true,
            startIndex: true,
            reversed: true
        }
    },
    mediaEmbed: {
      previewsInData: true,
      providers: [
        {
          name: 'custom',
          url: /^(https:\/\/tech\.sabzlearn\.ir\/uploads\/.+\.mp4)(\?.*)?$/,
          html: (match:string) => {
            const url = match[1];
            return (
              `<video controls style="max-width: 100%; height: auto;">
                <source src="${url}" type="video/mp4">
                Your browser does not support the video tag.
              </video>`
            );
          }
        }
      ]
    },
    placeholder: 'توضیحات مربوط به دوره...',
    table: {
        contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
    }

};
export default editorConfig


