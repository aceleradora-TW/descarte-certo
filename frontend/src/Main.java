import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Scanner;


public class Main {
    
    public static void main(String []args){

        double totalImpostos = 0.0;
        double totalCompra = 0.0;
        ArrayList<String> dadosCompradores = new ArrayList<>();   

        boolean menu = true;

        while(menu){
            System.out.println("Selecione a opção desejada:");
            System.out.println("1: Para cadastrar venda.");
            System.out.println("2: Para calcular valores finais.");
            System.out.println("3: Para encerrar o programa.");
            
            Scanner in = new Scanner(System.in);
            int opcao = in.nextInt();
            switch (opcao) {
                case 1:
                    System.out.println("informe os dados da compra : " );
                    Scanner in2 = new Scanner(System.in);
                    String dados = in2.next();
                    String nomeEmpresa = dados.split(";")[0];
                    Double valor = Double.parseDouble(dados.split(";")[1]) * 4.50;
                    
                    double icms = calculaImposto(valor, 18);
                    double ipi = calculaImposto(valor, 4);
                    double pis = calculaImposto (valor,1.86);
                    double cofins = calculaImposto(valor, 8.54);
                    double total = icms + ipi + pis + cofins + valor;
                    double totalImp = icms + ipi + pis + cofins;

                    totalImpostos += totalImp;
                    totalCompra += total;

                    dadosCompradores.add("Cliente " + nomeEmpresa + "\n" + "ICMS: R$ "+ Math.round(icms) + 
                    " IPI: R$ " + Math.round(ipi) + " PIS: R$ " + Math.round(pis) + " COFINS: R$ "
                            + Math.round(cofins) + " Total: R$ " + Math.round(total));
                    break;
                case 2:
                    for (int i = 0; i < dadosCompradores.size(); i++) {
                        System.out.println(dadosCompradores.get(i));
                    }
                    
                    System.out.printf("Total Impostos: R$ %.2f %n" , (totalImpostos) );
                    System.out.printf("Total Mercadorias: R$ %.2f %n" , (totalCompra));
                    System.out.printf("Total Geral: R$ %.2f %n" , (totalImpostos) + (totalCompra));
                    break;
                case 3:
                    menu = false;
                    break;
                default:
                    System.out.println("Opção inválida. Tente novamente.");
                    break;
            }

        } 


     }

     public static double calculaImposto(double valor,double imposto) {
         double total =  (valor/100)*imposto;
         return total;
     }

}
