import java.util.Scanner;

public class JogoAdivinha {
    public static void main (String [] args) {
        Scanner entrada = new Scanner(System.in);
        int palpite;
        System.out.println("Digite seu palpite:");
        palpite = entrada.nextInt();
        if(palpite == 17) {
            System.out.println("Amassou meu pit");
        }
        else {
            if(palpite < 17) {
                System.out.println("Vacilou meu cria, esse numero ta abaixo ein");
            } else {
                System.out.println("Vacilou meu cria, esse numero ta acima ein");
            }
        }
        entrada.close();
    }
}
