import java.util.Scanner;

public class Menu {
    public static void main ( String [] args ) {

        System.out.println("====== Menu de Opcoes ======");
        System.out.println(" 1 - Cadastrar Produtos ");
        System.out.println(" 2 - Listas Produtos ");
        System.out.println(" 3 - Sair do Sistema ");
        System.out.println("====== Escolha uma opcao ======");

        Scanner entrada = new Scanner(System.in);
        int menu = entrada.nextInt();

        switch (menu) {
            case 1:
                System.out.println("Voce escolheu o menu 1");
                System.out.println("Que e a opcao Cadastrar Produtos");
                break;
            case 2:
                System.out.println("Voce escolheu o menu 1");
                System.out.println("Que e a opcao Listar Produtos");
                break;
            case 3:
                System.out.println("Voce escolheu o menu 1");
                System.out.println("Que e a opcao sair do Sistema");
                break;
            default:
                System.out.println("Item de menu invalido");
        }
        entrada.close();
    }
}
