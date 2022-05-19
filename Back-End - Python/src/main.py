from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import random


app = FastAPI()

origins = ['http://127.0.0.1:5500']


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Pessoa(BaseModel):
    id: Optional[str]
    nome: str
    idade: int
    genero: str

banco: List[Pessoa] = []


@app.get("/pessoas")
async def listarCadastro():
    return banco

@app.get("/pessoas/{pessoa_id}")
async def obterPessoa(pessoa_id: str):
    for pessoa in banco:
        if pessoa_id == pessoa.id:
            return pessoa
    return {'mensagem':'pessoa nao localizada'}

@app.delete('/pessoas/{pessoa_id}')
async def deletarCadastro(pessoa_id: str):
    posicao = -1
    for index, pessoa in enumerate(banco):
        if pessoa_id == pessoa.id:
            posicao = index
            break
    if posicao != -1:
        banco.pop(posicao)
        return {'mensagem':'Cadastro Removido'}
    else: 
        return {'mensagem':'Pessoa nao localizada'}


@app.post("/pessoas")
async def cadastrarPessoa(pessoa: Pessoa):
    pessoa.id = random.randint(1, 1000)
    banco.append(pessoa)
    return None
