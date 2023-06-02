#include <iostream>
#include <vector>
#include <numeric>

using namespace std;

int arrayPlusArray(vector<int> a, vector<int> b)
{
    return accumulate(b.begin(), b.end(), accumulate(a.begin(), a.end(), 0));
}

int main(int argc, char const *argv[])
{
    cout << arrayPlusArray({1, 2, 3}, {4, 5, 6}) << endl;
    cout << arrayPlusArray({1, -2, -3}, {4, -5, 6}) << endl;
    cout << arrayPlusArray({-1, -2, -3}, {-4, -5, -6}) << endl;
    cout << arrayPlusArray({0, 0, 0}, {4, 5, 6}) << endl;
    cout << arrayPlusArray({-1}, {-1}) << endl;
    return 0;
}
