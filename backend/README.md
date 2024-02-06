# API DOCS

## Ghi chú: guarded = cần token

### POST /api/user guarded

note: dateOfBirth hiện chưa có định dạng chuẩn

```json
{
    "fullName": string,
    "phoneNumber": string,
    "gender": "male" or "female" or "other",
    "dateOfBirth": string
}
```

### POST /api/conversations guarded

note: Khởi tạo 1 conversation mới
firstMessage: Tin nhắn đầu tiên người dùng gửi kèm

```json
{
    "firstMessage": string // example: "Chào cậu"
}
```

### POST /api/conversations/{id}/messages guarded

note: Thêm message vào conversation sẵn có
{id}: conversationId
content: nội dung tin nhắn

```json
{
    "content": string
}
```

https://github.com/dev-mastery/comments-api

https://merlino.agency/blog/clean-architecture-in-express-js-applications

https://www.youtube.com/watch?v=CnailTcJV_U
