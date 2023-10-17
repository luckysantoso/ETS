console.log("OK");
console.log("ready");


    $.ajax({
        url : 'http://159.223.51.203:81/api/bio',
        success: result => {
            const data = result;
            console.log(data);
            console.log(data[0].name);
            let cards = '';
            data.forEach(d => {
                cards += `
                <div class="col-sm-3 my-md-3 mb-4">
                    <div class="card" style="width: auto;border-left: 4px solid blue;">
                        <div class="card-body">
                          <h6 class="card-title text-primary text-uppercase">${d.name}</h5>
                          <h5 class="card-subtitle mb-2 text-muted">${d.id}</h6>
                        </div>
                      </div>              
                </div>`
            });
        $('.bio-container').html(cards);
        }
        });    
        //jika error
        error: (e) => {
            console.log(e.resposeText);
        };


