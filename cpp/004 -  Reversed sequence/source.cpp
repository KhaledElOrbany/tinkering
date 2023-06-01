#include <iostream>
#include <vector>

using namespace std;

vector<int> reverseSeq(int n)
{
    vector<int> v = {};
    for (size_t i = n; i > 0; i--)
    {
        v.push_back(i);
    }
    return v;
}

int main(int argc, char const *argv[])
{
    reverseSeq(5);
    return 0;
}
