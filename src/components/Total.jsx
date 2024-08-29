

function Total({item}) {
    

  return (
    <>
        <div className="flex justify-between">
            <div>
              {
                item.total<=0?"":item.name  
              }
            

            </div>
            <div>
            {
                item.total<=0?"":item.total 
              }            
            </div>
        </div>
    </>
  )
}

export default Total