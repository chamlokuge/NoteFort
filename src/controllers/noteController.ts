import { MethodResponse, ResponseStatusCode } from '../types/commonTypes';
import Note, { INote } from './../models/noteModel';
import { NoteParams } from '../types/noteParams';

export class NoteController {
    
    /**
     * Process add note
     * @param noteInfo: NoteParams
     */
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


    /**
     * Process update note
     * @param userId
     * @param noteId
     * @param body
     */
    public static async updateNote(userId: string,noteId:string|undefined,body:any){
        
        if(!noteId){
            return new MethodResponse(ResponseStatusCode.BadRequest, 'Invalid note');
        }
        
        try{

            let note = await Note.findByIdAndUpdate({_id:noteId,userId: userId})

            if (note){
                
                await note.updateOne({content:body,isArchived:false});
                return new MethodResponse(ResponseStatusCode.Success, 'Note updated');
            }
            else{
    
                return new MethodResponse(ResponseStatusCode.NotFound, 'Note not found');
            }
        }
        catch (e){

            console.error(e);
            return new MethodResponse(ResponseStatusCode.InternalError, 'Note update failed');

        }
       

    }


    /**
     * Process getNote
     * @param userId
     * @param noteId
     */
    public static async getNote(userId: string,noteId:string|undefined){

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


    /**
     * Process get note list for the user
     * @param userId
     */
    public static async getAllNotesList(userId: string): Promise<MethodResponse> {
        try {
            
            let notes = await Note.find({userId: userId})
            console.log(notes);
            if (notes == null){
                return new MethodResponse(ResponseStatusCode.BadRequest, 'Note not found', {notes:notes});
            }
            console.log(notes);
            return new MethodResponse(ResponseStatusCode.Success, 'success', notes);
        }
        catch (why) {
            console.log(why);
            return new MethodResponse(ResponseStatusCode.InternalError, why)
        }
    }


    /**
     * Process get archived list of notes for user
     * @param userId
     */
    public static async getArchivedNoteList(userId: string){

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


    /**
     * Process get unarchived list of notes for user
     * @param userId
     */
    public static async getUnachivedNoteList(userId: string){

        try{

            let notes = await Note.find({userId: userId,isArchived:false})

            if (notes){
                
                return new MethodResponse(ResponseStatusCode.Success, 'Unarchived Notes found',{notes:notes});
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


    /**
     * Process archived note 
     * @param userId
     * @param noteId
     */
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


    /**
     * Process unarchived note 
     * @param userId
     * @param noteId
     */
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


    /**
     * Process delete note 
     * @param userId
     * @param noteId
     */
    public static async deleteNote(userId: string,noteId:string|undefined){

        if(!noteId){
            return new MethodResponse(ResponseStatusCode.BadRequest, 'Invalid note id');
        }

        try{

            let note = await Note.findByIdAndRemove({_id:noteId})

            if (note){
                
                return new MethodResponse(ResponseStatusCode.Success, 'Note deleted success');
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
}


   
    


