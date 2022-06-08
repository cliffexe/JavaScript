import java.util.Scanner;

public class Jogo {
    public static void main (String [] args) {
        Scanner entrada = new Scanner(System.in);
        int pontos = 0;
        System.out.println ("Digite o número de pontos do jogador : ");
        pontos = entrada.nextInt();

        if (pontos >= 1000) {
            System.out.println ("Que isso meu pit, ta amassando, vamo pra fase 2!");
        }

        System.out.println("proxima instrucao");
        entrada.close();
    }
}
