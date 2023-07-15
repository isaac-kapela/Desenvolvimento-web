package com.example.provaisaackapela.repository;

import com.example.provaisaackapela.model.Funcionario;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;


@Component
public class BancoDeDados {

    List<Funcionario> funcionarios = new ArrayList<>();


    public BancoDeDados() {
        funcionarios.add(new Funcionario(11, "pedro", 3.000, "Dev junior"));
        funcionarios.add(new Funcionario(22, "Maria", 4.000, "Dev senior"));
        funcionarios.add(new Funcionario(33, "Marcos", 3.000, "Dev junior"));
        funcionarios.add(new Funcionario(44, "Isaac", 10.000, "Cordenador"));
    }

    public List<Funcionario> findAll() {
        return funcionarios;
    }



    public String save(Funcionario funcionario){
        for(Funcionario funcionario1: funcionarios){
            if(funcionario.getNumeroDoCracha()==funcionario1.getNumeroDoCracha()) {
                return "Impossivel cadastrar! funcionario ja consta no banco";
            }
        else{
                    funcionarios.add(funcionario);
                    return "funcionario" + funcionario.getNome() + " foi cadastrado com sucesso";
                }

        }
        return null;
    }

    public String delete(int NumeroDoCracha){
        for (Funcionario funcionario: funcionarios){
            if (funcionario.getNumeroDoCracha()== NumeroDoCracha){
                funcionarios.remove(funcionario);
                return "Funcionario deletado com sucesso";
            }
            else {
                return "Funcionario inexistente";
            }
        }
        return null;
    }






}