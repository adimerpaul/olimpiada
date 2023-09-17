<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Models\grupo;
use App\Http\Requests\StoreStudentRequest;
use App\Http\Requests\UpdateStudentRequest;
use Illuminate\Support\Facades\DB;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Student::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    public function listprof(){
        return DB::SELECT("SELECT DISTINCT tutor,celular from students");
    }

    public function buscarEst($ci){
        return DB::SELECT("SELECT s.*,(select count(*) from grupos g where g.student_id = s.id) num from students s where s.cedula = '$ci'");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreStudentRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreStudentRequest $request)
    {
        //return Student::create($request->all());


        $request->validate([
            'cedula' => 'required|unique:posts|max:255',
            'email' => 'required|unique',
        ]);

        $nombreimagen='';
        if ($request->hasFile('imagen')) {
            $file=$request->file('imagen');
            $nombreimagen = $file->getClientOriginalName();
            $file->move(\public_path('imagenes'), $nombreimagen);
        }
        $student=new Student();
        $student->cedula=strtoupper($request->cedula);
        $student->nombres=strtoupper($request->nombres);
        $student->apellidos=strtoupper($request->apellidos);
        $student->correo=$request->correo;
        $student->unidad=$request->unidad;
        $student->curso=$request->curso;
        $student->tutor=strtoupper($request->tutor);
        $student->celular=$request->celular;
        $student->save();

        $grupo=new Grupo;
        $grupo->fecha=date('Y-m-d');
        $grupo->categoria=$request->categoria;
        $grupo->imagen=$nombreimagen;
        $grupo->student_id=$student->id;
        $grupo->save();

        $stud= Student::where('id',$student->id)->with('grupo')->first();
        return $stud;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function show(Student $student)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function edit(Student $student)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateStudentRequest  $request
     * @param  \App\Models\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateStudentRequest $request, Student $student)
    {
        $gr=Grupo::where('student_id',$request->id)->count();
        if($gr>=3)
            return false;


        $nombreimagen='';
        if ($request->hasFile('imagen')) {
            $file=$request->file('imagen');
            $nombreimagen = $file->getClientOriginalName();
            $file->move(\public_path('imagenes'), $nombreimagen);
        }

        $grupo=new Grupo;
        $grupo->categoria=$request->categoria;
        $grupo->imagen=$nombreimagen;
        $grupo->student_id=$request->id;
        $grupo->save();

        $stud= Student::where('id',$request->id)->with('grupo')->first();
        return $stud;

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function destroy(Student $student)
    {
        $student->delete();
        return $student;
    }
}
