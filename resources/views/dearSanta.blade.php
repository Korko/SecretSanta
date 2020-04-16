@extends('templates/fetcher', ['styles' => '/css/dearSanta.css', 'fetchUrl' => route('dearsanta.fetch', ['participant' => $participant])])

@section('script')
    @parent

    {!! NoCaptcha::renderJs(App::getLocale()) !!}

    <script type="text/javascript" src="{{ mix('/js/common.js') }}"></script>
    <script type="text/javascript" src="{{ mix('/js/dearSanta.js') }}"></script>
@stop
