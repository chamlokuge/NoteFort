import { MethodResponse, ResponseStatusCode } from '../types/commonTypes';
import Note, { INote } from './../models/noteModel';
import { NoteParams } from '../types/noteParams';

export class NoteController {
    public static async addNote(noteInfo: NoteParams): Promise<MethodResponse>{
        try{

            if(noteInfo.content== "" || noteInfo.content == undefined)
                return new MethodResponse(ResponseStatusCode.BadRequest, "Content must not be empty")
                
            const newNote: INote = new Note({
                userId: noteInfo.userId,
                content: noteInfo.content
            })

            let savedNote =await newNote.save();

            console.log(savedNote._id);

            return new MethodResponse(ResponseStatusCode.Success, 'note saved',{noteId:savedNote._id});
        }
        catch(why) {
            return new MethodResponse(ResponseStatusCode.InternalError, why)
        }
    }

    public static async getNoteByUserId(userId: string): Promise<MethodResponse> {
        try {
            let notes = await Note.find({ user: userId})
            if (notes == null){
                return new MethodResponse(ResponseStatusCode.BadRequest, 'Note not found');
            }
            return new MethodResponse(ResponseStatusCode.Success, 'success', notes);
        }
        catch (why) {
            return new MethodResponse(ResponseStatusCode.InternalError, why)
        }
    }

    public static async archiveNote(userId: string,noteId:string|undefined){

        if(!noteId){
            return new MethodResponse(ResponseStatusCode.BadRequest, 'Invalid note');
        }

        try{

            let note = await Note.findOne({_id:noteId,userId: userId})

            if (note && ! note.isArchived){
                
                await note.updateOne({isArchived:true});
                return new MethodResponse(ResponseStatusCode.Success, 'Note archived');
            }
            else{
    
                return new MethodResponse(ResponseStatusCode.NotFound, 'Note not found');
            }
        }
        catch (e){

            console.error(e);
            return new MethodResponse(ResponseStatusCode.InternalError, 'Archive failed');

        }
       

    }

    public static async unArchiveNote(userId: string,noteId:string|undefined){

        if(!noteId){
            return new MethodResponse(ResponseStatusCode.BadRequest, 'Invalid note id');
        }

        try{

            let note = await Note.findOne({_id:noteId,userId: userId,isArchived:true})

            if (note){
                
                await note.updateOne({isArchived:false});
                return new MethodResponse(ResponseStatusCode.Success, 'Note restored from archive');
            }
            else{
    
                return new MethodResponse(ResponseStatusCode.NotFound, 'Note not found');
            }
        }
        catch (e){

            console.error(e);
            return new MethodResponse(ResponseStatusCode.InternalError, 'Unarchive failed due to internal error');

        }
       

    }

    public static async getNoteForUser(userId: string,noteId:string|undefined){

        if(!noteId){
            return new MethodResponse(ResponseStatusCode.BadRequest, 'Invalid note id');
        }

        try{

            let note = await Note.findOne({_id:noteId,userId: userId})

            if (note){
                
                return new MethodResponse(ResponseStatusCode.Success, 'Note found',{note:note});
            }
            else{
    
                return new MethodResponse(ResponseStatusCode.NotFound, 'Note not found');
            }
        }
        catch (e){

            console.error(e);
            return new MethodResponse(ResponseStatusCode.InternalError, 'Internal error');

        }
       

    }

    public static async getArchivedNoteForUser(userId: string){

        try{

            let notes = await Note.find({userId: userId,isArchived:true})

            if (notes){
                
                return new MethodResponse(ResponseStatusCode.Success, 'Notes found',{notes:notes});
            }
            else{
    
                return new MethodResponse(ResponseStatusCode.NotFound, 'Notes not found');
            }
        }
        catch (e){

            console.error(e);
            return new MethodResponse(ResponseStatusCode.InternalError, 'Internal error');

        }
       

    }



//    public static async DeleteNoteByUserId(userId:string):Promise<MethodResponse>{

//    }


    
}

