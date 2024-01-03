const { error, log } = require("console");
const readlineSync = require('readline-sync');
const unorm = require('unorm');
const i18next = require('i18next');
const fsBackend = require('i18next-fs-backend');
const normalizeText = (text) => unorm.nfd(text).replace(/[\u0300-\u036f]/g, '');
const ReadFile = () => {
    const fs = require("fs");
    try {
        const data = fs.readFileSync("post.json", "utf8");
        return JSON.parse(data) ;
    } catch (error) {
        console.log(error);
    }

}

const writeFile=(cloneData)=>{
    const fs = require("fs");
  
    try {
        fs.writeFileSync("post.json",cloneData,"utf8");
      } catch (error) {
          console.log(error);
      }
}

const addNew = (cloneData) => {
   try{
    const readlineSync = require('readline-sync');
    const title = readlineSync.question('Nhập tiêu đề bài viết mới: ');
    const content = readlineSync.question('Nhập nội dung bài viết mới: ');
    const topic = readlineSync.question('Nhập chủ đề mới: ');
    const author = readlineSync.question('Nhập tác giả mới: ');
  
    
    const newPost = {
        "id": cloneData.posts.length + 1,
        "title": title,
        "content": content,
        "topic": topic,
        "author": author,
        "date": new Date().toISOString().slice(0, 10) 
      };
      if( cloneData.posts.push(newPost)){
        console.error("\n===== Đã thêm thành công =====");
      }
     
   }catch(err){
        console.log(err);
   }
  
      
}

const editData=(cloneData)=>{
    const readlineSync = require('readline-sync');
    const newId= readlineSync.question("Nhập id bài viết:");
    const updatedPosts = cloneData.posts.map((post) => {
        if (post.id == newId) {
            post.title = readlineSync.question("Nhập tiêu đề mới: ") || post.title;
            post.content = readlineSync.question("Nhập nội dung mới: ") || post.content;
            post.topic = readlineSync.question("Nhập chủ đề mới: ") || post.topic;
            post.author = readlineSync.question("Nhập tác giả mới: ") || post.author;
        }
        return post;
    });
    cloneData.posts = updatedPosts;
    console.log("Đã chỉnh sửa bài viết có ID là", newId);
}

const removeData=(cloneData)=>{
    const readlineSync = require('readline-sync');
    const newId= Number(readlineSync.question("Nhập id bài viết:"));
    const updatedPosts = cloneData.posts.filter((post)=> post.id !== newId);
    console.log("Đã xoá bài viết có id là:",newId);
   return updatedPosts;
    
}

const viewTitleFromTopic=(cloneData)=>{
    const readlineSync = require('readline-sync');
    do{
    console.log("======= Hãy chọn chủ đề yêu thích của bạn ========");
    for (let index = 0; index < cloneData.posts.length; index++) {
        console.log(`${index+1}. ${cloneData.posts[index].topic}`);
        
    }
    console.log("0.Thoát");
    const choice= readlineSync.question("Hãy nhập lựa chọn của bạn:");
    if(choice){
        return;
    }
    const data =cloneData.posts.find((post)=>post.id==choice);
    console.log(data);
    

    }while(1==1);
   
}
const sortByDate = (posts, order) => {
    const sortedPosts = [...posts];
    sortedPosts.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        if (order === 'asc') {
            return dateA - dateB;
        } else if (order === 'desc') {
            return dateB - dateA;
        } else {
            return 0;
        }
    });

    return sortedPosts;
};

    
const searchPosts = (posts, keyword) => {
    const normalizedKeyword = normalizeText(keyword).toLowerCase();

    const searchResults = [];

    posts.forEach((post) => {
        const normalizedTitle = normalizeText(post.title).toLowerCase();
        const normalizedContent = normalizeText(post.content).toLowerCase();

        const titleMatch = normalizedTitle.includes(normalizedKeyword) ? 2 : 0;
        const contentMatch = normalizedContent.includes(normalizedKeyword) ? 1 : 0;
        const totalMatch = titleMatch + contentMatch;

        if (totalMatch > 0) {
            searchResults.push({
                post,
                matchingScore: totalMatch,
            });
        }
    });

    searchResults.sort((a, b) => b.matchingScore - a.matchingScore);

    return searchResults.map((result) => result.post);
};





module.exports={
    ReadFile,
    writeFile,
    addNew,
    editData,
    removeData,
    viewTitleFromTopic,
    sortByDate,
    searchPosts,
   
}