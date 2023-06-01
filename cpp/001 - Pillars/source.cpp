#include <iostream>

using namespace std;

long pillars(int num_of_pillars, int distance, int width);

int main()
{
    cout << pillars(1, 10, 10) << endl;
    cout << pillars(2, 20, 25) << endl;
    cout << pillars(11, 15, 30) << endl;
    return 0;
}

long pillars(int num_of_pillars, int distance, int width)
{
    return num_of_pillars == 1 ? 0 : (--num_of_pillars * distance * 100) + --num_of_pillars * width;
}