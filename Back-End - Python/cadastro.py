from pickle import NONE
from fastapi import FastAPI
from typing import List, Optional
from pydantic import BaseModel
from uuid import uuid4

class Pessoa(BaseModel):
    id: Optional[str]
    nome: str
    idade: int
    sexo : str

cad = FastAPI()

banco: List[Pessoa] = []

@cad.get("/pessoas")
def listar_pessoa():
    return banco

@cad.get("/pessoas/{pessoa_id}")
def buscar_pessoa(pessoa_id):
    for pessoa in banco:
        if(pessoa_id == pessoa.id):
            return pessoa
    return {"error":"Pessoa nao encontrada!"}

@cad.delete("/pessoas/{pessoa_id}")
def deletar_cadastro(pessoa_id):
    contador = -1
    for index, pessoa in enumerate(banco):
        if(pessoa_id == pessoa.id):
            contador = index
            break
    if (index != -1):
        banco.pop(index)
        return {"msg":"Cadastro Removido"}
    else:
        {"erro": "Pessoa nao encontrada!"}

@cad.post("/pessoas")
def cadastrar_pessoas(pessoa: Pessoa):
    banco.append(pessoa)
    pessoa.id = str(uuid4())
    return None