import React from 'react'

 const fetchData = async ()=>{
  try {
    const response = await fetch('http://localhost:3000/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
}
}

const page = () => {
  return (
    <div>About me</div>
  )
}

export default page