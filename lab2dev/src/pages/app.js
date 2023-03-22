import { styled } from "../styles/index"
////////////////////////////////////////////
//HOME MENU
////////////////////////////////////////////
export const Container = styled('div',{
    padding:'0 10vw',
})
export const Cabecalho = styled('header',{
display:'flex',
paddingTop: 40,
justifyContent:'space-between'

}) 

export const Lista = styled('ul',{
    display:'flex',
    textAlign:'center',
}) 

export const Menu = styled('a',{
    textAlign:'center',
    color:'#3D1A4A',
    paddingLeft:60,
    textDecoration:'none',
})
/////////////////////////////////////////////////////////
//CORPO
/////////////////////////////////////////////////////////
export const Divisa1 = styled('div',{
    padding:30,
    justifyContent:'space-between',
    display:'flex',
    width:'100%',
   
})
export const Hometext = styled('div',{
    width:'40%',
})

export const Titulo = styled('h1',{
    fontSize:30,
    color:'#3D1A4A',
})

export const Paragrafo = styled('p',{
    paddingTop:10,  
    fontStyle:'normal',
    fontSize:20,
})

export const Botao = styled('button',{
    color:'White',
    backgroundColor:'#712782',
    boxShadow: '0,2,2 rgba(0,0,0,0.25)',
    borderRadius:6,
    padding:'12px 50px',
})

export const Client = styled('div',{
    padding:'50px 0px',
    textAlign:'center',
})



