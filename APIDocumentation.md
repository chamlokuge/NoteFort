<h1 id="notemanager">NoteManager v1.0.0</h1>

Personal Note Manager

Base URLs:

* <a href="https://app.swaggerhub.com/apis-docs/chamlokuge/Test2/1.0.0">Swagger Documentation</a>

Email: <a href="mailto:chamodilokuge@email.com">Support</a>
<br>
License: <a href="http://www.apache.org/licenses/LICENSE-2.0.html">Apache 2.0</a>

## API Documentation 📔

## post__notes_addNote_ 🔒

`POST /notes/addNote/`

*Add Note*

Add a new Note

<h3 id="post__notes_addnote_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|header|string|false|none|
|content|query|string|false|none|

<h3 id="post__notes_addnote_-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[Success](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|BadRequest|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## post__notes_updateNote_ 🔒

`POST /notes/updateNote/`

*Update Note*

Update existing note

<h3 id="post__notes_updatenote_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|header|string|false|none|
|noteId|query|string|false|none|
|content|query|string|false|none|

<h3 id="post__notes_updatenote_-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[Success](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|BadRequest|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## delete__notes_deleteNote_ 🔒

`DELETE /notes/deleteNote/`

*Delete Note*

Delete existing note

<h3 id="delete__notes_deletenote_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|header|string|false|none|
|noteId|query|string|false|none|

<h3 id="delete__notes_deletenote_-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[Success](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|BadRequest|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__notes_getNote_ 🔒

`GET /notes/getNote/`

*Get a Note*

Get a note by noteId and userId

<h3 id="get__notes_getnote_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|header|string|false|none|
|noteId|query|string|false|none|

<h3 id="get__notes_getnote_-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|BadRequest|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__notes_getAllNotesList_ 🔒

`GET /notes/getAllNotesList/`

*Get all notes*

Get archived and unarchived note list

<h3 id="get__notes_getallnoteslist_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|header|string|false|none|

<h3 id="get__notes_getallnoteslist_-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[Success](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|BadRequest|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## put__notes_archive_ 🔒

`PUT /notes/archive/`

*Archive a note*

Archive a existing note

<h3 id="put__notes_archive_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|header|string|false|none|
|noteId|query|string|false|none|

<h3 id="put__notes_archive_-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[Success](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|BadRequest|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## put__notes_unArchive_ 🔒

`PUT /notes/unArchive/`

*un-archive a note*

Un archive a archived note

<h3 id="put__notes_unarchive_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|header|string|false|none|
|noteId|query|string|false|none|

<h3 id="put__notes_unarchive_-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[Success](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|BadRequest|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__notes_getArchiveNoteList_ 🔒

`GET /notes/getArchiveNoteList/`

*Get archive note list*

Get archive note list

<h3 id="get__notes_getarchivenotelist_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|header|string|false|none|

<h3 id="get__notes_getarchivenotelist_-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[Success](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|BadRequest|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

## get__notes_getUnArchiveNoteList_ 🔒

`GET /notes/getUnArchiveNoteList/`

*Get unarchive note list*

Get unarchive note list

<h3 id="get__notes_getunarchivenotelist_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|userId|header|string|false|none|

<h3 id="get__notes_getunarchivenotelist_-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[Success](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|BadRequest|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Unauthorized|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="notemanager-auth">auth</h1>

## post__auth_register_ 

`POST /auth/register/`

*Register user*

Register a new user

<h3 id="post__auth_register_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|false|none|
|password|query|string|false|none|
|firstName|query|string|false|none|
|lastName|query|string|false|none|

<h3 id="post__auth_register_-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[Success](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|BadRequest|None|

<aside class="success">
This operation does not require authentication
</aside>

## post__auth_login_

`POST /auth/login/`

*Login*

Login to the system

<h3 id="post__auth_login_-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|email|query|string|false|none|
|password|query|string|false|none|

<h3 id="post__auth_login_-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[Success](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Success|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|BadRequest|None|

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|_id|string|false|none|none|
|userId|string|false|none|none|
|content|string|false|none|none|

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

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|userId|string|false|none|none|
|fistName|string|false|none|none|
|lastName|string|false|none|none|
|email|string|false|none|none|
|password|string|false|none|none|

