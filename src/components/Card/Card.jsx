/* eslint-disable react/prop-types */
function Card({ data }) {
  return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
      <figure className='relative mb-3 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 p-1'>{data?.category}</span>
        <img
          className='w-full h-full object-cover rounded-lg'
          src={data.image} 
          alt={data.title}
        />
        <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2'>+</div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light line-clamp-1 text-ellipsis'>{data.title}</span>
        <span className='text-lg font-medium'>${data.price}</span>
      </p>
    </div>
  );
}

export { Card };