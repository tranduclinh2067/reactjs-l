### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

***

# Learn Reactjs
Components

## /src

### index.js

### style.scss

### /components

- /Header
- /Main
- /MainContent
- /Card
- /CardContent
- /CardDetail
- /CardRelated
- /Login
- /Footer

### /router

- /Directional

### /data

- card-data.json
- main-data.json

## Giải quyết vấn đề

### Các khái niệm cơ bản của Reactjs

### Dùng JSX cho toàn bộ dự án

### Khi xác định được đường dẫn tĩnh, sử dụng (%PUBLIC_URL%)

### Các value mặc định có hỗ trợ (defaultValue)

### Sử dụng (ref) để lưu trữ giá trị

### Điều hướng cho trang web bằng Router

### Nhận biết khi ở trang nào, sẽ sử dụng activeClassName

### Tạo đường dẫn bằng cách thêm tham số từ props

### Sử dụng tham số từ URL

### Xử lý form dưới dạng text-pass-checker-select-file

- Đưa dữ liệu từ form sang state dưới dạng array

## Bài học

### Khái niệm components

### Khái niệm props

- Các props màu tím

### Khái niệm states

- Trạng thái stats có trong folder (Main)

	- Thay đổi state với onClick=''

### Sử dụng map(callBack) để chạy vòng lặp

### Sử dụng (JSX) cho toàn bộ dự án

- <file_name>.jsx

### Sử dụng (%PUBLIC_URL%) cho đừng dẫn tĩnh

- /public/index.html

	-     <link href="%PUBLIC_URL%/<file...>" />

### Sử dụng (defaultValue) trong <input>

- defaultValue={this.props.children}

### LifeCycle trong Reactjs

### Sử dụng (ref) trong Reactjs

- ref={callBack}

### Reactjs Router (Điều hướng)

- https://reactrouter.com/

### Sử dụng activeClassName

### Tạo, import <file>.json

- Sử dụng map() để duyệt dữ liệu

### Tạo đường dẫn chuẩn SEO

- props.

### Tham số từ URL parameter

- match>param>

	- /:slug.:id

### Xử lý form

- Router Redirect

	- event.preventDefault()
	- import <Redirect> in Router-dom

- Lấy dữ liệu từ Form lưu trữ dưới dạng Array

	- ReactJS (Handing Mutiple Inputs)

		- this.setState({
   [name] : value
})

### Xử lý form Select

- Đặt giá trị mặc định bên trong state

### Xử lý upload file

- Lấy thông tin từ mục input file

## package.json

### dependencies

- react
- react-dom
- react-router-dom
- react-scripts
- node-sass
- vietnamese-slug

### devDependencies

- eslint-plugin-react

## Xử lý Error

### Sử dụng map() bên trong có chứa if-else

- Expected to return a value at the end of arrow function  array-callback-return

	- if() {}
return true;

## Nên return về 1 cái gì đó

## Tạo state tương ứng với input_name

## event.target.files




***

![img](/README/reactjs.png)