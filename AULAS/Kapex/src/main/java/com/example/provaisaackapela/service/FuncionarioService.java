package com.example.provaisaackapela.service;


import com.example.provaisaackapela.model.Funcionario;
import com.example.provaisaackapela.repository.BancoDeDados;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class FuncionarioService {

    @Autowired
    private BancoDeDados bancoDeDados;


    public List<Funcionario> getAll() {
        return bancoDeDados.findAll();
    }

    public Funcionario pegarCracha(int numeroDoCracha){
        List<Funcionario> funcionarios = bancoDeDados.findAll();
        for(Funcionario funcionario: funcionarios){
            if(funcionario.getNumeroDoCracha()==numeroDoCracha){
                return funcionario;

            }
        }
        return null;
    }




    public Funcionario getMaiorSalario(double salario) {
        double maiorSalario = 0;
        int index = 0;
        List<Funcionario> funcionarios = bancoDeDados.findAll();

        for (int i = 0; i < funcionarios.size(); i++) {
            if (funcionarios.get(i).getSalario() > maiorSalario) {
                maiorSalario = funcionarios.get(i).getSalario();
                index = i;
            }
        }
        return funcionarios.get(index);
    }


    public String save(Funcionario funcionario){
        return bancoDeDados.save(funcionario);

    }

    public String delete( int  numeroDoCracha){
        return bancoDeDados.delete(numeroDoCracha);
    }





}