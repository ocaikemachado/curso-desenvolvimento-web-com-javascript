// o bloco pode ter diversos blocos dentro dele, mas é necessário que ele feche assim como começou (envolvendo todo o restante)
{
    {
    console.log("passo 1");
    }
}
// o bloco pode ser simples com nenhum bloco dentro
{
    console.log("passo 2");
}
// o bloco de código pode ter diversos códigos dentro dele, mas é necessário respeitar a ordem da sintaxe.
{
    {
        {console.log("passo 3")};
        {console.log("passo 4")};
        {console.log("passo 5")};
        {console.log("passo 6")};
        {console.log("passo 7")};
    }
}
// caso o código dentro do bloco não tenha sentido, toda a sintaxe correta é exibida, mas a parte errada não
{
    {
        {
            12345
            teste
            curitiba, parana
        }
    }
}