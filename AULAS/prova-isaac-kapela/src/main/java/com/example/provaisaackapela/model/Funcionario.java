package com.example.provaisaackapela.model;

public class Funcionario {

    private int numeroDoCracha;
    private String nome;
    private double salario;
    private String cargo;

    public Funcionario() {
    }

    public Funcionario(int numeroDoCracha, String nome, double salario, String cargo) {
        this.numeroDoCracha = numeroDoCracha;
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo;
    }

    public int getNumeroDoCracha() {
        return numeroDoCracha;
    }

    public void setNumeroDoCracha(int numeroDoCracha) {
        this.numeroDoCracha = numeroDoCracha;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getSalario() {
        return salario;
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }

    public String getCargo() {
        return cargo;
    }

    public void setCargo(String cargo) {
        this.cargo = cargo;
    }
}
