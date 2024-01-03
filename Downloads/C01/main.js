const main = () => {
    const readlineSync = require('readline-sync');
    const feature = require("./feature.js")
    let cloneData;
    if (!cloneData) {
        cloneData = feature.ReadFile();
    }

    while (true) {
        console.log("\n=== Quản lý Bài viết ===");
        console.log("1. Hiển thị danh sách bài viết");
        console.log("2. Thêm một bài viết mới");
        console.log("3. Sửa bài viết");
        console.log("4. Thêm một bài viết");
        console.log("5. Tìm bài viết theo chủ đề");
        console.log("6. Sắp xếp theo ngày cập nhật (Tăng dần)");
        console.log("7. Sắp xếp theo ngày cập nhật (Giảm dần)");
        console.log("0. Thoát");

        const choice = readlineSync.question("Chọn một tùy chọn: ");

        switch (choice) {
            case '1':

                console.table(cloneData.posts);

                break;
            case '2':
                feature.addNew(cloneData);
                break;
            case '3':
                feature.editData(cloneData);
                break;
            case "4":
                cloneData.posts = feature.removeData(cloneData);
                break;
            case "5":
                feature.viewTitleFromTopic(cloneData);
                break;
            case '6':
                cloneData.posts = feature.sortByDate(cloneData.posts, 'asc');
                console.log("Đã sắp xếp tăng dần theo ngày cập nhật.");
                break;
            case '7':
                cloneData.posts = feature.sortByDate(cloneData.posts, 'desc');
                console.log("Đã sắp xếp giảm dần theo ngày cập nhật.");
                break;
            case "8":
                const title=readlineSync.question("Nhap title:");
                console.log(feature.searchPosts(cloneData.posts,title));
                
                break;
            case '0':
                feature.writeFile();
                console.log("Ứng dụng đã thoát.");
                process.exit();
            default:
                console.log("Lựa chọn không hợp lệ. Hãy thử lại.");
        }
    }
};
main();