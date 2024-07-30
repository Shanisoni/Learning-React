// (class component ke andr jb event apply krte h to onclick me onclick={ ()=> this.functionName() } likhte hain.)

// we can bind the this so that it will not return undefined 
// syntax : this.func Name = this.func name .bind(this )


 {/* if we want to bind the this in the rendor method then do this  */}
//  <input type='button'   onClick={this.shani.bind(this)}  value='click'    ></input>

// lekin agr hum arrow function ka use krte h to hme ye bind krne ki zroorat nhi hoti h 


// mounting ka mtlb prepre , setup , organise krna then ata h updation phase then ata unmounting jisme hum component ko destroy kte h 

// jo hm import krte h wo actual me hum apna code actual domse pehle virtualdom me run krte h error checking ke liye 

// lekin ye mounting unmounting sb sirf class component pe apply hota h 






// Constructor   

// so constructor hamara first phase hota h mounting ka 

// isme do parts hote h mtlb do reason ki vajah se use kiya jata h \

// 1 for initialiging the object 

// 2 for biniding the event handlers 


// we CAN not use APIS in Constructor,  

// agr super nhi likhte h to this ka use nhi kr payenge constructor mr 



// getDeriveedStateFromProps iska use tb krte h jb hme apna state props ki help se change krwana ho , 
// mtlb state props pe depend kr rhi ho 

// isme this ka use nhi kr skte h 


