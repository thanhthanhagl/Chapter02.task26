# Chapter 02

Code 1 trang Landing page tĩnh theo task `mgm_design_lp (Task26)`

**Files thiết kế**

https://drive.google.com/drive/folders/14RxRy2aRlWHln4jLGSahc1DvW5nNS8o3?usp=sharing

**Yêu cầu công việc**

1. Kiểm tra file design (AI) rồi mark up bằng EJS/SASS. Website tham khảo:
   - [EJS -- Embedded JavaScript templates](https://ejs.co/)
   - [Hướng dẫn học SCSS | Học web chuẩn (hocwebchuan.com)](https://hocwebchuan.com/tutorial/scss/)
2. Thiết kế CSS theo qui tắc của Flocss và lưu ý đến tính tái sử dụng khi code.
3. Phần Youtube, Google map thì code bằng iframe.

**Nhiệm vụ và điểm quan trọng**

- Khi xuất file ảnh cần lưu ý đến độ lệch `1px`. Đặc biệt, illustrator thường được sử dụng nhiều trong các thiết kế dùng để in ấn nên sẽ xảy ra trường hợp pixel grid không phù hợp (chỉ định bằng mm hoặc pt). Lúc đó, hãy sử dụng pixel preview và cẩn thận không để xảy ra việc chênh lệch "1 px" trong file ảnh được xuất ra.
- Tuân thủ qui tắc của Flocss và đặt tên class CSS sao cho không xảy ra xung đột về tên class trong trường hợp có thêm các trang con được tạo thêm sau này.
- Không lạm dụng properties tiện dụng `display:flex` trong lúc code. Đối với các yếu tố block xếp ngang nhau thì nhiều lúc chỉ cần dùng `display: inline-block` hoặc `float: left` là đủ. Nên ý thức sử dụng những properties đó.