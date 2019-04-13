import * as xml from 'xml';
function getXMLResponse(response) {
	return xml(response);
}
module.exports = {
    getXMLBody : function createResponse(req){
        console.log(req.query)
        var ev = req.query.event;
        var data = req.query.data || '';
        var cid = req.query.cid;
        var res;
        if(ev){
            if(ev == "NewCall"){
                res = {
                    response : [{
                        playtext : 'Welcome to Demo App'
                    },{
                        collectdtmf : [{
                            _attr: { t: "#", o : 8000}
                        },{
                            playtext : 'Are you male or female. Enter 1 for male and 2 for female'
                        }]
                    }]

                }
            }
            else if(ev == "GotDTMF"){
                var maleORfemale = req.query.sid.split('$')[1];
                if(maleORfemale || data){
                    if(maleORfemale && data){
                        if(data == 1){
                            res = {
                                response : [{
                                    playtext : 'You are an adult'
                                }]
            
                            }
                        }
                        else if(data == 2){
                            res = {
                                response : [{
                                    playtext : 'Minors are not allowed'
                                }]
            
                            }
                        }
                        else{
                            res = {
                                response : [{
                                    playtext : 'Sorry wrong input'
                                },{
                                    collectdtmf : [{
                                        _attr: { t: "#", o : 8000}
                                    }]
                                }]
            
                            }
                        }
                    }
                    else if(data){
                        if(data > 2 || data == 0){
                            res = {
                                response : [{
                                    playtext : 'Sorry wrong input'
                                },{
                                    collectdtmf : [{
                                        _attr: { t: "#", o : 8000}
                                    }]
                                }]
            
                            }                            
                        }
                        else if(data == 1){
                            res = {
                                response : [{
                                    _attr: { sid: cid + "$"  + data}
                                },{
                                    collectdtmf : [{
                                        _attr: { t: "#", o : 8000}
                                    },{
                                        playtext : 'Are you above 21?. Press 1 for yes and 2 for no'
                                    }]
                                }]
            
                            } 
                        }
                        else{
                            res = {
                                response : [{
                                    _attr: { sid: cid + "$"  + data}
                                },{
                                    collectdtmf : [{
                                        _attr: { t: "#", o : 8000}
                                    },{
                                        playtext : 'Are you above 18?. Press 1 for yes and 2 for no'
                                    }]
                                }]
            
                            } 
                        }
                    }
                    else{
                        res = {
                            response : [{
                                playtext : 'Please enter your input'
                            },{
                                collectdtmf : [{
                                    _attr: { t: "#", o : 8000}
                                }]
                            }]        
                        }                        
                    }
                }
            }
            else{
                res = {
                    response:[{hangup: ''}]
                };

            }
        }
        return getXMLResponse(res);
    }
};