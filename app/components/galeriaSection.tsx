
const imagens = [
  {link:"image1.jpg",
    descricao:"teste"
  },
  {link:"image2.jpg"},
  {link:"image3.jpg"},
  {link:"image4.jpg"},
  {link:"image1.jpg",
    descricao:"teste"
  },
  {link:"image2.jpg"},
  {link:"image3.jpg"},
  {link:"image4.jpg"}
]

export default function ImagensGaleria(){
  return (
    <div>
      <section className="bg-amber-200">
        <div className="m-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {imagens.map((img,index)=>
            <div className="grid gap-4 ">
              <img className=" w-full rounded-2xl object-cover hover:scale-[1.02] transition" src={img.link} alt="" /> 
           
            </div>
          )}
        </div>
      </section>
    </div>
  )
}