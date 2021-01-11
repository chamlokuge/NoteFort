<h1 id="notemanager">NoteManager v1.0.0</h1>

Personal Note Manager

Base URLs:

* <a href="https://app.swaggerhub.com/apis-docs/chamlokuge/Test2/1.0.0">Swagger Documentation</a>

Email: <a href="mailto:chamodilokuge@email.com">Support</a>
<br>
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

## API Documentation 📔

## Add Note 🔒

`POST /notes/addNote/`

*Add Note*

Add a new Note

<h3 id="post__notes_addnote_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|header|string|true|from token|
|content|query|string|true|none|

<h3 id="post__notes_addnote_-responses">Responses</h3>

|Status|Meaning|Description|  
|---|---|---|  
|200|[Success](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|  
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|BadRequest|  
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|  

<aside class="success">
This operation requires authentication
</aside>

## Update Note 🔒

`POST /notes/updateNote/`

*Update Note*

Update existing note

<h3 id="post__notes_updatenote_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|header|string|true|from token|
|noteId|query|string|true|none|
|content|query|string|true|none|

<h3 id="post__notes_updatenote_-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|
|200|[Success](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|BadRequest|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|

<aside class="success">
This operation requires authentication
</aside>

## Delete Note 🔒

`DELETE /notes/deleteNote/`

*Delete Note*

Delete existing note

<h3 id="delete__notes_deletenote_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|header|string|true|from token|
|noteId|query|string|true|none|

<h3 id="delete__notes_deletenote_-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|
|200|[Success](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|BadRequest|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|

<aside class="success">
This operation requires authentication
</aside>

## Get Note 🔒

`GET /notes/getNote/`

*Get a Note*

Get a note by noteId and userId

<h3 id="get__notes_getnote_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|header|string|true|from token|
|noteId|query|string|true|none|

<h3 id="get__notes_getnote_-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|BadRequest|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|

<aside class="success">
This operation requires authentication
</aside>

## Get All Notes List 🔒

`GET /notes/getAllNotesList/`

*Get all notes*

Get archived and unarchived note list

<h3 id="get__notes_getallnoteslist_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|header|string|true|from token|

<h3 id="get__notes_getallnoteslist_-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|
|200|[Success](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|BadRequest|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|

<aside class="success">
This operation requires authentication
</aside>

## Archive Note 🔒

`PUT /notes/archive/`

*Archive a note*

Archive a existing note

<h3 id="put__notes_archive_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|header|string|true|from token|
|noteId|query|string|true|none|

<h3 id="put__notes_archive_-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|
|200|[Success](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|BadRequest|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|

<aside class="success">
This operation requires authentication
</aside>

## Unarchive Note 🔒

`PUT /notes/unArchive/`

*un-archive a note*

Un archive a archived note

<h3 id="put__notes_unarchive_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|header|string|true|from token|
|noteId|query|string|true|none|

<h3 id="put__notes_unarchive_-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|
|200|[Success](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|BadRequest|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|

<aside class="success">
This operation requires authentication
</aside>

## Get Archived Note List 🔒

`GET /notes/getArchiveNoteList/`

*Get archive note list*

Get archive note list

<h3 id="get__notes_getarchivenotelist_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|header|string|true|from token|

<h3 id="get__notes_getarchivenotelist_-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|
|200|[Success](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|BadRequest|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|

<aside class="success">
This operation requires authentication
</aside>

## Get Unarchive Note List 🔒

`GET /notes/getUnArchiveNoteList/`

*Get unarchive note list*

Get unarchive note list

<h3 id="get__notes_getunarchivenotelist_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|header|string|true|from token|

<h3 id="get__notes_getunarchivenotelist_-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|
|200|[Success](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|BadRequest|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|

<aside class="success">
This operation requires authentication
</aside>

<h1 id="notemanager-auth">auth</h1>

## auth_register  

`POST /auth/register/`

*Register user*

Register a new user

<h3 id="post__auth_register_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|none|
|password|query|string|true|none|
|firstName|query|string|true|none|
|lastName|query|string|true|none|

<h3 id="post__auth_register_-responses">Responses</h3>

|Status|Meaning|ResponseMessage|Payload|
|---|---|---|---|
|200|[Success](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|token|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|BadRequest|none|

<aside class="success">
This operation does not require authentication
</aside>

## auth_login  

`POST /auth/login/`

*Login*

Login to the system

<h3 id="post__auth_login_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|true|none|
|password|query|string|true|none|

<h3 id="post__auth_login_-responses">Responses</h3>

|Status|Meaning|Description|
|---|---|---|
|200|[Success](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|BadRequest|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_Note">Note</h2>
<!-- backwards compatibility -->
<a id="schemanote"></a>
<a id="schema_Note"></a>
<a id="tocSnote"></a>
<a id="tocsnote"></a>

```json
{
  "_id": "string",
  "userId": "string",
  "content": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|_id|string|true|none|
|userId|string|true|none|
|content|string|true|none|

<h2 id="tocS_User">User</h2>
<!-- backwards compatibility -->
<a id="schemauser"></a>
<a id="schema_User"></a>
<a id="tocSuser"></a>
<a id="tocsuser"></a>

```json
{
  "userId": "string",
  "fistName": "string",
  "lastName": "string",
  "email": "string",
  "password": "string"
}

```

### Properties

|Name|Type|Required|Description|
|---|---|---|---|
|userId|string|true|none|
|fistName|string|true|none|
|lastName|string|true|none|
|email|string|true|none|
|password|string|true|none|

