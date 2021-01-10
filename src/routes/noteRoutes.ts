import { NoteController } from './../controllers/noteController';
import { Request, Response, Router } from 'express';
import { MethodResponse } from '../types/commonTypes';
export const noteRouter: Router = Router();

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

noteRouter.put("/archive/:noteId", async (req:Request, res:Response) => {

    const noteId = req.params.noteId;
    const userId=req.headers['userId'] as string;

    let noteResponse: MethodResponse = await NoteController.archiveNote(userId,noteId);
    res.status(noteResponse.status).send({
        responseMessage: noteResponse.responseMessage,
        payload: noteResponse.payload
    })
})

noteRouter.get("/get/:noteId", async (req:Request, res:Response) => {

    const noteId = req.params.noteId;
    const userId=req.headers['userId'] as string;
    
    let noteResponse: MethodResponse = await NoteController.getNoteForUser(userId,noteId);
    res.status(noteResponse.status).send({
        responseMessage: noteResponse.responseMessage,
        payload: noteResponse.payload
    })
})

noteRouter.get("/getArchived", async (req:Request, res:Response) => {

    const noteId = req.params.noteId;
    const userId=req.headers['userId'] as string;
    
    let noteResponse: MethodResponse = await NoteController.getArchivedNoteForUser(userId);
    res.status(noteResponse.status).send({
        responseMessage: noteResponse.responseMessage,
        payload: noteResponse.payload
    })
})



// noteRouter.delete("/deleteNote", isAuthenticated, async (request, response) => {
//     let userId = request.params.userId;
//     let noteResponse: MethodResponse = await NoteController.DeleteNoteByUserId(userId);
//     response.status(noteResponse.status).send({
//         responseMessage: noteResponse.responseMessage,
//         payload: noteResponse.payload
//     })
// })












