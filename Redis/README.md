# Redis

## Document database

Understand how to use Redis as a docoment databse

Create an index

The examples in this article refer to a simple bicycle inventory that contains JSON documents with the following structure:

```json
{
  "brand": "brand name",
  "condition": "new | used | refurbished",
  "description": "description",
  "model": "model",
  "price": 0
}
```

## Redis penetration

## Cache breakdown

ví dụ: 100tr user truy cập vào cache. Nhưng cache timestamp hết hạn ---> 100tr user truy cập vào database. --> database bị truy

Cách giải quyết:

* Nếu dữ liệu quan trọng, set vĩnh viễn setCacheWithExpiration
* Tự động gia hạn cache, cron job
* Mutex, nếu 
