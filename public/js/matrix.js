function mapdata() {

  let nodes = [];
  let edges = [];

    let nodesize = 3;
      for(let i=0; i<nodesize; i++){
        for(let j=0; j<nodesize; j++){
          nodes.push({"data": { "id": `N${i}-${j}` }});
        }
      }

      for(let i=0; i<nodesize; i++){
        for(let j=0; j<nodesize; j++){
          if(i+1<nodesize){
            edges.push({ "data": { "id": `${i}-${j}S`, "source": `N${i}-${j}`, "target":`N${i+1}-${j}` } });
          }
          if(j+1<nodesize){
            edges.push({ "data": { "id": `${i}-${j}E`, "source": `N${i}-${j}`, "target":`N${i}-${j+1}` } });
          }
          if(i+1<nodesize){
            edges.push({ "data": { "id": `${i}-${j}N`, "source": `N${i}-${j}`, "target":`N${i+1}-${j}` } });
          }
          if(j+1<nodesize){
            edges.push({ "data": { "id": `${i}-${j}W`, "source": `N${i}-${j}`, "target":`N${i}-${j+1}` } });
          }

          if(i<nodesize-1 && j<nodesize-1){
            edges.push({ "data": { "id": `${i}-${j}A`, "source": `N${i}-${j}`, "target":`N${i+1}-${j+1}` } });
          }
          if(i<nodesize-1 && j>0){
            edges.push({ "data": { "id": `${i}-${j}B`, "source": `N${i}-${j}`, "target":`N${i+1}-${j-1}` } });
          }
        
        
        
          
        }
      }

  // Write your logic here...

  elements = {
    nodes,

    edges
  };

  return elements;

}
module.exports.mapdata = mapdata;


