import { NoteController } from './../controllers/noteController';
import { Request, Response, Router } from 'express';
import { MethodResponse } from '../types/commonTypes';
export const noteRouter: Router = Router();

// add a new note
noteRouter.post("/add", async (req : Request, res: Response) => {

    const content = req.body.content;
    
    //Get user id from request - this is set by checkToken middleware
    const userId=req.headers['userId'] as string;

    const noteResponse: MethodResponse = await NoteController.addNote({
        userId,
        content
    });

    res.send({
        responseMessage: noteResponse.responseMessage,
        payload:noteResponse.payload
    });

    
})

// update note
noteRouter.post("/update/:noteId", async (req:Request, res:Response) => {

    const noteId = req.params.noteId;

    //Get user id from request - this is set by checkToken middleware
    const userId=req.headers['userId'] as string;
    let content = req.body.content;

    let noteResponse: MethodResponse = await NoteController.updateNote(
        userId,
        noteId,
        content
        );
    res.status(noteResponse.status).send({
        responseMessage: noteResponse.responseMessage,
        payload: noteResponse.payload
    })
})


// get notes from noteId
noteRouter.get("/get/:noteId", async (req:Request, res:Response) => {

    const noteId = req.params.noteId;

    //Get user id from request - this is set by checkToken middleware
    const userId=req.headers['userId'] as string;
    
    let noteResponse: MethodResponse = await NoteController.getNote(userId,noteId);
    res.status(noteResponse.status).send({
        responseMessage: noteResponse.responseMessage,
        payload: noteResponse.payload
    })
})


// get all notes of a user
// TODO: add pagination
noteRouter.get("/getAllNotes", async (req:Request, res:Response) => {

    //Get user id from request - this is set by checkToken middleware
    const userId=req.headers['userId'] as string;
    
    let noteResponse: MethodResponse = await NoteController.getAllNotesList(userId);
    res.status(noteResponse.status).send({
        responseMessage: noteResponse.responseMessage,
        payload: noteResponse.payload
    })
})


// get all archived notes of a user
// TODO: add pagination
noteRouter.get("/getArchived", async (req:Request, res:Response) => {

    const noteId = req.params.noteId;

    //Get user id from request - this is set by checkToken middleware
    const userId=req.headers['userId'] as string;
    
    let noteResponse: MethodResponse = await NoteController.getArchivedNoteList(userId);
    res.status(noteResponse.status).send({
        responseMessage: noteResponse.responseMessage,
        payload: noteResponse.payload
    })
})


// get all notArchived notes of a user
// TODO: add pagination
noteRouter.get("/getUnarchived", async (req:Request, res:Response) => {

    const noteId = req.params.noteId;

    //Get user id from request - this is set by checkToken middleware
    const userId=req.headers['userId'] as string;
    
    let noteResponse: MethodResponse = await NoteController.getUnachivedNoteList(userId);
    res.status(noteResponse.status).send({
        responseMessage: noteResponse.responseMessage,
        payload: noteResponse.payload
    })
})


// archive a note
noteRouter.put("/archive/:noteId", async (req:Request, res:Response) => {

    const noteId = req.params.noteId;

    //Get user id from request - this is set by checkToken middleware
    const userId=req.headers['userId'] as string;

    let noteResponse: MethodResponse = await NoteController.archiveNote(userId,noteId);
    res.status(noteResponse.status).send({
        responseMessage: noteResponse.responseMessage,
        payload: noteResponse.payload
    })
})


// delete note
noteRouter.delete("/delete/:noteId", async (req:Request, res:Response) => {

    const noteId = req.params.noteId;

    //Get user id from request - this is set by checkToken middleware
    const userId=req.headers['userId'] as string;

    let noteResponse: MethodResponse = await NoteController.deleteNote(userId,noteId);
    res.status(noteResponse.status).send({
        responseMessage: noteResponse.responseMessage,
        payload: noteResponse.payload
    })
})












