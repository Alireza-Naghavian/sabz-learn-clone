 const generateAnchor = (body:string)=>{
    const parser = new DOMParser();
    const doc = parser.parseFromString(body,"text/html");
    const headings= doc.querySelectorAll("h2");
    headings.forEach((heading,index)=>{
        const id = `section-${index}`;
        heading.setAttribute("id",id);
    
    })
    return doc.body.innerHTML;
}
export default generateAnchor