package com.example.provaisaackapela.controller;


import com.example.provaisaackapela.model.Funcionario;
import com.example.provaisaackapela.service.FuncionarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/funcionarios")
public class FuncionarioController {

    @Autowired
    private FuncionarioService funcionarioService;

    @GetMapping
    public List<Funcionario> getAll(){
       return funcionarioService.getAll();
    }

    @GetMapping("/{numeroDoCracha}")
    public Funcionario pegarCracha(@PathVariable int numeroDoCracha ){
        return funcionarioService.pegarCracha(numeroDoCracha);
    }

    @PostMapping()
    public String save(@RequestBody Funcionario funcionario){
        return funcionarioService.save(funcionario);
    }

    @DeleteMapping("/numeroDoCracha")
    public String delete(@PathVariable int numeroDoCracha){
        return funcionarioService.delete(numeroDoCracha);
    }




}
