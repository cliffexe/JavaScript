import java.util.Scanner;
import java.util.Random;

public class AdivRandom {
    public static void main (String [] args) {
        Scanner entrada = new Scanner(System.in);
        Random rand = new Random();
        int palpite, num = 0;
        num = rand.nextInt(10) + 1;
        System.out.println("Da seu palpite ai meu cria:");
        palpite = entrada.nextInt();
        if(palpite == num) {
            System.out.println("Acertou meu pit, o número era " + num);
        }
        else {
            if(palpite < num) {
                System.out.println("Chutou baixo meu cria, o número era " + num);
            } else {
                System.out.println("Chutou alto meu cria, o número era " + num);
            }
        }
        entrada.close();
    }
}
